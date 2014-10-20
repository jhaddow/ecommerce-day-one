"use strict";

var Mongoose = require('mongoose')
  , Moment = require('moment');

var address = require('./shared/address')
  , phone = require('./shared/phone')
  , product = require('./shared/product');

var schema = new Mongoose.Schema({

  customer: { type: Mongoose.Schema.Types.ObjectId, ref: 'Customer' },

  billing: address,
  shipping: address,

  shippingPhone: phone,
  billingPhone: phone,

  items: [
    {
      quantity: { type: Number, min: 1, default: 1 },
      product: product
    }
  ],

  status: { type: String, enum: ['pending', 'shipped', 'billed', 'completed'], default: 'pending' },

  createdAt: { type: Date, required: true, default: Moment().utc().toDate() },
  updatedAt: { type: Date }

});

//TODO: Totals



module.exports = Mongoose.model('Order', schema);