"use strict";

module.exports = {
  name: { type: String, required: true, unique: true },
  description: { type: String },
  price: { type: Number, min: 0, precision: 2, required: true },
  active: { type: Boolean, default: true }
};
