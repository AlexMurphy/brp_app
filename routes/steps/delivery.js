'use strict';

module.exports = {
  '/': {
    controller: require('../../controllers/start'),
    template: 'index',
    next: '/letter-received'
  },
  '/letter-received': {
    controller: require('../../controllers/letter-received'),
    fields: [
      'received',
      'delivery-date',
      'delivery-date-day',
      'delivery-date-month',
      'delivery-date-year',
      'no-letter'
    ],
    next: '/same-address'
  },
  '/letter-not-received': {
    template: 'letter-not-received',
  },
  '/on-the-way': {
    controller: require('../../controllers/on-the-way'),
    template: 'on-the-way',
  },
  '/same-address': {
    controller: require('../../controllers/same-address'),
    template: 'same-address-details.html',
    fields: [
      'address-match',
      'delivery-details',
      'address-street',
      'address-town',
      'address-county',
      'address-postcode'
    ],
    backLink: '/letter-received',
    next: '/personal-details'
  },
  '/personal-details': {
    controller: require('../../controllers/personal-details'),
    template: 'personal-details-passport.html',
    fields: [
      'fullname',
      'date-of-birth',
      'date-of-birth-day',
      'date-of-birth-month',
      'date-of-birth-year',
      'nationality',
      'passport'
    ],
    backLink: '/same-address',
    next: '/contact-details'
  },
  '/contact-details': {
    controller: require('../../controllers/contact-details'),
    fields: [
      'email',
      'no-email',
      'address-street',
      'address-town',
      'address-county',
      'address-postcode',
      'phone'
    ],
    backLink: '/personal-details',
    next: '/check-details'
  },
  '/check-details': {
    controller: require('../../controllers/check-details'),
    fields: [
      'org-help',
      'rep-name',
      'organisation'
    ],
    backLink: '/contact-details',
    next: '/confirmation'
  },
  '/confirmation': {
    controller: require('../../controllers/confirmation'),
    backLink: false,
    next: '/done'
  },
  '/done': {
    backLink: null
  }
};
