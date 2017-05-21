'use strict';

module.exports = function(County) {
  /**
   * Get county details including indicators
   * @param {Function(Error)} callback
   */

  County.prototype.details = function(callback) {
    County.findById(this.id, {
      include: { countyIndicators: [ 'indicator', 'metrics' ] }
    }, function(err, county) {
      callback(null, county);
    });
  };
};
