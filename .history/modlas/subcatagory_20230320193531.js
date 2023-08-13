const mongoose = require("mongoose");

const subcatagorySchema =  new mongoose.Schema({
  name:{
    type: 'string',
    unique: true,
    minLength:

  }
},{timestamps:true});

const subcatagoryModal = mongoose.model("subcatagory", subcatagorySchema);
module.exports = subcatagoryModal;