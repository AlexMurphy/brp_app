'use strict';

module.exports = {
  '/': {
    controller: require('../../controllers/collection-where'),
    template: 'collection/where',
    fields: [
      'collection-where-radio',
      'collection-date',
      'collection-date-day',
      'collection-date-month',
      'collection-date-year',
    ],
    next: '/reasons'
  },
  '/reasons': {
    controller: require('../../controllers/collection-reason'),
    template: 'collection/reasons',
    fields: [
      'reason-radio',
      'reason-under-age',
      'reason-non-identity',
      'reason-others-identity',
      'reason-others-auth',
      'reason-passport-family',
      'reason-passport-lost',
      'reason-passport-stamp',
      'reason-no-brp',
      'reason-other'
    ],
    next: '/nominated-person',
    backLink: '/'
  },
  '/nominated-person': {
    controller: require('../../controllers/nominated-person'),
    template: 'collection/nominated',
    fields: [
      'nominated-fullname',
      'nominated-date',
      'nominated-date-day',
      'nominated-date-month',
      'nominated-date-year',
      'nominated-nationality',
      'nominated-id-number'
    ],
    next: '/uk-address',
    backLink: '/reasons'
  },
  '/uk-address': {
    template: 'collection/uk-address',
    fields: [
      'uk-address-radio',
      'uk-address-street',
      'uk-address-town',
      'uk-address-county',
      'uk-address-postcode'
    ],
    next: '/confirmation',
    backLink: '/reasons'
  },
  '/confirmation': {
    controller: require('../../controllers/confirmation'),
    template: 'collection/confirmation',
    backLink: false,
    next: '/done'
  },
  '/done': {
    backLink: null
  }
};
