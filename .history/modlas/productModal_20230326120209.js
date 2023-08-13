const mongoose = require('mongoose'); 


const productSchema = new mongoose.Schema({

  title:{
    type:String,
    unique:true,
    required:true,
    trim:true,
    minLength:5
  },

  description:{
    type:String, 
    required:true,
    minLength:12},

  priceBeforeDesc:{
   type:Number,
   required:true,},

  priceAfterDesc:{
    type:Number,
    required:true},

  rating:Number,
  mark:String,
  colors:Array,
  images:Array,
})

module.exports = mongoose.model('product', productSchema);