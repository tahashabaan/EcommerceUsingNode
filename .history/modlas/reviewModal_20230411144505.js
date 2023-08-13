const mongoose = require ('mongoose');

const reviewSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    ratings:{
        type:Number,
        min:1,
        max:5,
        required:true,
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'user',
        required:true
    },
    product:{
        type:mongoose.Schema.ObjectId,
        ref:'product',
        required:true
    }

},{timestamps:true});

reviewSchema.pre(/^find/, func(next) =>{
    
    this.populate({
        path: 'user',
        select: 'name -_id',
      });
      next();
})

module.exports = mongoose.model('review', reviewSchema);