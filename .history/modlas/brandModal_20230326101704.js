const mongoose = require('mongoose');


const brandSchema = new mongoose.Schema({
    name:{
        type:String,
        nique:true,
        minLength:3,
        maxLength:14, 
    },
    slug:{
        type:String,
        lowercase:true
    },
    image:String

}, {timeseries:true})

module.exports =  mongoose.model('brand', brandSchema);