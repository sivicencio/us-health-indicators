'use strict';

var importDataService = require('../services/import-data-service');

exports.uploadCreateGet = function(req, res, next) {
  return res.render('upload');
};

exports.uploadCreatePost = function(req, res, next) {
  if(!req.files || !req.files.cdc_file) {
    return res.render('upload', {
      response: "Excel file can't be blank"
    });
  }

  importDataService(req.files.cdc_file.data, req.app);

  return res.render('upload', {
    response: 'Data loading started. Check API later to see results.'
  });
};
