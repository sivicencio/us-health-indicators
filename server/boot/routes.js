'use strict';

var uploadController = require('../controllers/upload-controller');

module.exports = function(app) {
  var router = app.loopback.Router();

  router.get('/upload', uploadController.uploadCreateGet);

  router.post('/upload', uploadController.uploadCreatePost);

  app.use(router);
};
