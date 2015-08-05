'use strict';

var app = require('express').Router();
var deliverySteps = require('./steps/delivery');
var errorSteps = require('./steps/error');
var lostSteps = require('./steps/lost');
var fields = require('./fields');
var wizard = require('../lib/base-wizard');
var mixins = require('hmpo-template-mixins');
var i18n = require('i18n-future')();

var deliveryWizard = wizard(deliverySteps, fields, {translate: i18n.translate.bind(i18n)});
var errorWizard = wizard(errorSteps, fields, {translate: i18n.translate.bind(i18n)});
var lostWizard = wizard(lostSteps, fields, {translate: i18n.translate.bind(i18n)});

app.use(mixins(i18n.translate.bind(i18n), fields));

app.use('/not-arrived/', deliveryWizard);
app.use('/correct-mistakes/', errorWizard);
app.use('/lost-stolen-damaged/', lostWizard);

module.exports = app;
