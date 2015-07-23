'use strict';

var util = require('util');
var _ = require('underscore');

var Controller = require('hmpo-form-wizard').Controller;
var Model = require('../models/email');

var Submit = function Submit() {
  Controller.apply(this, arguments);
};

var templateMap = {
  '/permit-delivery/check-details': 'permit',
  '/permit-error/check-details': 'error',
  '/permit-lost-or-stolen/check-details': 'lost-or-stolen'
};

util.inherits(Submit, Controller);

Submit.prototype.saveValues = function saveValues(req, res, callback) {
  var data = _.pick(req.sessionModel.toJSON(), _.identity);
  var model = new Model(data);

  if (templateMap[req.originalUrl]) {
    model.set('template', templateMap[req.originalUrl]);
  } else {
    throw new Error('no template found');
  }

  model.save(callback);
};

module.exports = Submit;
