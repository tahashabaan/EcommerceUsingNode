const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  cartItems:[{
    product:{
        type:mongoose.Schema.ObjectId,
        ref:'product'
    },
    price:Number,
    quantity:Number,
    color:String
  }],
  
})


module.exports = mongoose.model('cart', cartSchema);