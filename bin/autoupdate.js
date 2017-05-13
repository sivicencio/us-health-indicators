var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.postgres;

ds.autoupdate( function(err) {
  if (err) throw err;

  console.log('Models autoupdated');
} );
