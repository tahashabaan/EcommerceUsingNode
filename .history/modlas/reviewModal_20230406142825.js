const mongoose = require ('mongoose');

const reviewSchema = new mongoose({
    title:{
        type:String,
    },
    ratings:{
        type:Number,
        min:1,
        max:5,
        required:
    }

},{timestamps:true})