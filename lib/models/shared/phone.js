"use strict";

module.exports = {
  kind: { type: String, enum: ['mobile', 'work', 'home', 'other'] },
  phoneNumber: { type: String, required: true },
  active: { type: Boolean, default: true }
};