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
    default:0,
},

price:{
    type:Number,
    required:true,
    trim:true,
    maxlength:20
 },

  priceAfterDiscount:Number,
  rating:Number,
  mark:String,
  colors:[String],
  images:[String],
  imageCover :{
    type:String,
    required:true
  },
  // ref
  catagory:{
    type: mongoose.Schema.ObjectId,
    ref:'catagory',
    required:true
  },
  subcatagory:{
     typpe
  }
})

module.exports = mongoose.model('product', productSchema);