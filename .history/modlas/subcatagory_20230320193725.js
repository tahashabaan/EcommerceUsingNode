const mongoose = require("mongoose");

const subcatagorySchema =  new mongoose.Schema({
  name:{
    type: 'string',
    trim: true,
    unique: true,
    minLength:4,
    maxLength:12
  },
slug:{
    type: 'string',
    lowercase: true,
},
cata

},{timestamps:true});

const subcatagoryModal = mongoose.model("subcatagory", subcatagorySchema);
module.exports = subcatagoryModal;