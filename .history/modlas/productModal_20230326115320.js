const mongoose = require('mongoose'); 


const productSchema = new mongoose.Schema({
  title:{
    type:String,
    unique:true,
    minLength:5
  }
})