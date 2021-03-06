'use strict';

module.exports = {
  email: {
    validate: ['required', 'email'],
    type: 'email',
    dependent: {
      value: '',
      field: 'no-email'
    }
  },
  'no-email': {
    toggle: 'address-group'
  },
  'contact-address-house-number': {
    validate: ['required'],
      label: 'common-fields.address-house-number.label',
      dependent: {
        value: 'true',
        field: 'no-email'
      }
  },
  'contact-address-street': {
    validate: ['required'],
    label: 'common-fields.address-street.label',
    dependent: {
      value: 'true',
      field: 'no-email'
    }
  },
  'contact-address-town': {
    validate: ['required'],
    label: 'common-fields.address-town.label',
    dependent: {
      value: 'true',
      field: 'no-email'
    }
  },
  'contact-address-county': {
    label: 'common-fields.address-county.label',
  },
  'contact-address-postcode': {
    validate: ['required'],
    label: 'common-fields.address-postcode.label',
    dependent: {
      value: 'true',
      field: 'no-email'
    }
  }
};
