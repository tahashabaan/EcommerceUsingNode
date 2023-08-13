const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  cartItems:[{
    product
  }]
})


module.exports = mongoose.model('cart', cartSchema);