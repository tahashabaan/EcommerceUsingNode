const mongoose = require('mongoose'); 


const productSchema = new mongoose.Schema({

  title:{
    type:String,
    unique:true,
    required:true,
    trim:true,
    minLength:5
  },
  slug:{
    type:String,
    required:true,
    lowercase:true
  },

  description:{
    type:String, 
    required:true,
    minLength:20
},
quantity:{
    type:Number,
    required:true,
},
sold:{
    type:Number,
    required:true,
},
price:{
    type:Number,
    required:true,
 },

  priceBeforeDesc:{
   type:Number,
   required:true,
},

  priceAfterDesc:{
    type:Number,
    required:true
},

  rating:Number,
  mark:String,
  colors:Array,
  images:Array,
})

module.exports = mongoose.model('product', productSchema);