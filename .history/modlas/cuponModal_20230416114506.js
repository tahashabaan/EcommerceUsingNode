const mongoose = require('mongoose');

const cuponCodeSchema = new mongoose.Schema({
    code:{
        type:String,
        required:true,
        unique: true ,
        minLength:6,
        maxLength:6,
        trim:true,
        lowercase:true
    },
    dis: { type: Number, required: true } ,
    isPercent: { type: Boolean, required: true, default: true },
    expireDate: { type: Date, required: true, default: Date.now() },
    isActive: { type: Boolean,  required: true, default: true }

},{timestamps:true})


module.exports = mongoose.model('cuponCode', cuponCodeSchema)