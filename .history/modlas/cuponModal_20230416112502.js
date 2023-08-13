const mongoose = require('mongoose');

const cuponCodeSchema = new mongoose.Schema({
    code:{
        type:String,
        required:true,
        unique: true 
    },
    isPercent: { type: Boolean, required: true, default: true },
    amount: { type: Number, required: true } ,
    expireDate: { type: Date, required: true, default: Date.now() },
    isActive: { type: Boolean,  required: true, default: true }

},{timestamps:true})


module.exports = mongoose.model('cuponCode', cuponCodeSchema)