"use strict";

var Mongoose = require('mongoose')
  , Moment = require('moment');

var address = require('./shared/address')
  , phone = require('./shared/phone');

var schema = new Mongoose.Schema({

  name: {
    first: { type: String, required: true },
    middle: { type: String },
    last: { type: String, required: true }
  },

  email: { type: String, lowercase: true, unique: true },

  addresses: [address],
  phones: [phone],

  active: { type: Boolean, default: true },

  createdAt: { type: Date, required: true, default: Moment().utc().toDate() },
  updatedAt: { type: Date }


});
