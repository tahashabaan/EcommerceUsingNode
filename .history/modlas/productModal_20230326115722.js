const mongoose = require('mongoose'); 


const productSchema = new mongoose.Schema({
  title:{
    type:String,
    unique:true,
    required:true,
    minLength:5
  },
  description:{
    type:String, 
    required:true,
    
} ,
  rating:Number,
  mark:String,
  colors:Array,
  images:Array,


})