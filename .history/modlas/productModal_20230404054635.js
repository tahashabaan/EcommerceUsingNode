const mongoose = require('mongoose'); 


const productSchema = new mongoose.Schema({

  title:{
    type:String,
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
  
  ratingsAverage:{
    type:Number,
    min:1,
    max:5
},
ratingsQuantity:{
    type:Number,
    default:0
 },
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
  subcatagory:[{
     type: mongoose.Schema.ObjectId,
     ref:'subcatagory',
  }],
  brand:{
    type: mongoose.Schema.ObjectId,
    ref:'brand',
  }

})

productSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'catagory',
    select: 'name -_id',
  });
  next();
});

productSchema.post('init', (doc) => {
 if(doc.imageCover)  {
     const imageUrl = `${process.env.BASE_URL_ENV}/product/${doc.image}`;
     doc.imageCover = imageUrl;  }
  if(doc.)
})

productSchema.post('init', (doc) => {
  if(doc.image)  {
      const imageUrl = `${process.env.BASE_URL_ENV}/product/${doc.image}`;
      document.image = imageUrl;  }
 })



module.exports = mongoose.model('product', productSchema);