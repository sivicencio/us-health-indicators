'use strict';

var XLSX = require('xlsx');

module.exports = function(fileData, app) {
  var workbook = XLSX.read(fileData);

  var first_sheet_name = workbook.SheetNames[0];
  var worksheet = workbook.Sheets[first_sheet_name];

  var wsRows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  if (wsRows.length == 0) return console.log('No rows. Nothing to import');

  var initialRows = wsRows.splice(0, 2);
  var firstRow = initialRows[0].filter(function(elem, pos, arr) {
    return arr.indexOf(elem) == pos;
  });

  var County = app.models.County,
      Indicator = app.models.Indicator,
      CountyIndicator = app.models.CountyIndicator,
      Metric = app.models.Metric;

  // Promises could be better here but Loopback has partial support
  Indicator.findOrCreate({ name: firstRow.splice(0, 1)[0] },
    function(err, indicator, created) {
      if (err) return console.log(err);

      console.log('\nIndicator ' + indicator.name + ' imported');
      console.log('*********************');
      console.log('Counties\n*********************');

      wsRows.forEach(function(row) {
        County.findOrCreate({
          name: row[2],
          fipsCode: row[1],
          state: row[0]
        }, function(countyErr, county, created) {
          if (countyErr) return console.log(countyErr);

          console.log('  County ' + county.name + ' imported');
          CountyIndicator.findOrCreate( { countyId: county.id, indicatorId: indicator.id },
            function(countyIndicatorErr, countyIndicator, created) {
              if (countyIndicatorErr) return console.log(countyIndicatorErr);

              console.log('  -----------------------');
              console.log('  Metrics for ' + county.name + ' / Indicator ' + indicator.name + ' pair');
              console.log('  -----------------------');

              var metricData = {},
                  columnsPerYear = 7;
              for(var i = 3; i < row.length; i++) {
                if (row[i] !== 'No Data' && row[i] !== undefined) {
                  if ((i - 3) % columnsPerYear == 0) {
                    metricData = {};
                    metricData.peopleNumber = parseInt(row[i]);
                  }
                  else if ((i - 3) % columnsPerYear == 1)
                    metricData.percent = parseFloat(row[i]);
                  else if ((i - 3) % columnsPerYear == 2)
                    metricData.lowerConfidenceLimit = parseFloat(row[i]);
                  else if ((i - 3) % columnsPerYear == 3)
                    metricData.upperConfidenceLimit = parseFloat(row[i]);
                  else if ((i - 3) % columnsPerYear == 4)
                    metricData.ageAdjustedPercent = parseFloat(row[i]);
                  else if ((i - 3) % columnsPerYear == 5)
                    metricData.ageAdjustedLowerConfidenceLimit = parseFloat(row[i]);
                  else if ((i - 3) % columnsPerYear == 6) {
                    metricData.ageAdjustedUpperConfidenceLimit = parseFloat(row[i]);

                    // Last field for a year so it's time to add corresponding year
                    var yearIndex = Math.floor((i - 3) / columnsPerYear);
                    metricData.year = parseInt(firstRow[yearIndex]);
                    metricData.countyIndicatorId = countyIndicator.id;

                    //Create the metric instance
                    Metric.findOrCreate(metricData, function(metricErr, metric, created) {
                      if (metricErr) {
                        return console.log(metricErr);
                      }
                      console.log('    Year ' + metric.year + ': ' + metric.peopleNumber + ' (' + metric.percent + '%) imported');
                    });
                  }
                }
              }
          });
        });
      });
      console.log('*********************');
      console.log(wsRows.length + ' counties imported\n*********************');
  });
};
