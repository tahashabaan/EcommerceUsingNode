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
        ref:''
    }

},{timestamps:true});

module.exports = mongoose.model(review, reviewSchema);