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
catagory:{
    type: mongoose.Schema.Obj,
}

},{timestamps:true});

const subcatagoryModal = mongoose.model("subcatagory", subcatagorySchema);
module.exports = subcatagoryModal;