const mongoose = require ('mongoose');

const reviewSchema = new mongoose({
    title:{
        type:String,
        
    }
},{timestamps:true})