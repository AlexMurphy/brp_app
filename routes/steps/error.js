'use strict';

module.exports = {
  '/': {
    controller: require('../../controllers/start'),
    template: 'index',
    next: '/about-error'
  },
  '/about-error': {
    controller: require('../../controllers/about-error'),
    fields: [
      'first-name-error',
      'last-name-error',
      'date-of-birth-error-day',
      'date-of-birth-error-month',
      'date-of-birth-error-year',
      'birth-place-error',
      'gender-error',
      'sponsor-details-error',
      'nationality-error',
      'signature-error',
      'photograph-error',
      'damaged-error',
      'conditions-error'
    ],
    next: '/same-address'
  },
  '/same-address': {
    fields: [
      'address-match',
      'address-street',
      'address-town',
      'address-county',
      'address-postcode'
    ],
    backLink: '/about-error',
    next: '/personal-details'
  },
  '/personal-details': {
    template: 'personal-details-brp.html',
    fields: [
      'fullname',
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
    template: 'check-details-error.html',
    backLink: '/contact-details',
    next: '/confirmation'
  },
  '/confirmation': {
    backLink: false,
    next: '/done'
  },
  '/done': {
    backLink: null
  }
};
