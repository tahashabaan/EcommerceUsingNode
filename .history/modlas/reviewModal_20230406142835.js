const mongoose = require ('mongoose');

const reviewSchema = new mongoose.s({
    title:{
        type:String,
    },
    ratings:{
        type:Number,
        min:1,
        max:5,
        required:true,
    }

},{timestamps:true})