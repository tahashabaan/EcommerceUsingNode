const mongoose = require("mongoose");

const orderSchema = new mongoose.schema({});

module.exports = mongoose.model("order", orderSchema);
const PaymentSchema = new mongoose.Schema({
    amount: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      required: true
    },
    source: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });
  
  const Payment = mongoose.model('Payment', PaymentSchema);
  
  module.exports = Payment;