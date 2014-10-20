"use strict";

module.exports = {
  kind: { type: String, required: true, enum: ['Billing', 'Shipping', 'Both'], default: 'Both' },
  address: { type: String, required: true },
  address2: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  active: { type: Boolean, default: true }
};
