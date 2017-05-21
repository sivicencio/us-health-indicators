'use strict';

module.exports = function(County) {
  /**
   * Get county details including indicators
   * @param {Function(Error)} callback
   */

  County.prototype.details = function(callback) {
    County.findById(this.id, {
      include: {
        relation: 'countyIndicators',
        scope: {
          include: [
            {
              relation: 'indicator'
            },
            {
              relation:'metrics',
              scope: {
                order: 'year DESC'
              }
            }
          ]
        }
      }
    }, function(err, county) {
      callback(null, county);
    });
  };
};
