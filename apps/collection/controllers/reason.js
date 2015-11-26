'use strict';

var util = require('util');
var _ = require('underscore');
var BaseController = require('hof').controllers.base;

var ReasonController = function ReasonController() {
  BaseController.apply(this, arguments);
};

util.inherits(ReasonController, BaseController);

function getPlace(req) {
  var places = [
    'Post Office',
    'Sponsor'
  ];
  var place = {};

  if (_.includes(places, req.form.values['collection-where-radio'])) {
    place[req.form.values['collection-where-radio'].replace(/\s+/g, '-').toLowerCase()] = true;
    return place;
  }
}

function getReason(req) {
  var reasons = [
    'which-post-office',
    'under-age',
    'non-identity',
    'others-identity',
    'others-auth',
    'passport-family',
    'passport-lost',
    'no-brp'
  ];
  var reason = {};
  if (_.includes(reasons, req.form.values['reason-radio'])) {
    reason[req.form.values['reason-radio']] = true;
    return reason;
  }
}

ReasonController.prototype.locals = function collectionReasonLocals(req, res) {
  var locals = BaseController.prototype.locals.apply(this, arguments);
  return _.extend({}, locals, {
    baseUrl: req.baseUrl,
    nextPage: this.getNextStep(req, res),
    where: getPlace(req),
    reason: getReason(req)
  });
};

module.exports = ReasonController;
