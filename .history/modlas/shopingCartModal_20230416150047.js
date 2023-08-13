const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  cartItems:[{
    product:{
        type:mongoose.Schema.ObjectId,
        ref:'product'
    },
    price:Number,
    quantity:{type:Number, default:1},
    color:String
  }],
  totalPrice:{type:Number,  default:1},
  totalPriceAfterDisCount:Number,
  user:{
    type:mongoose.Schema.ObjectId,
    ref:'users'
  },
  // coupon:{
  //   type:mongoose.Schema.ObjectId,
  //   ref:'cuponCode'
  // }
 
})


module.exports = mongoose.model('cart', cartSchema);