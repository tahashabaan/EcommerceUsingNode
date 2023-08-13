const mongoose = require("mongoose");

const subcatagorySchema =  new mongoose.Schema({
  name:{
    type: 'string',
    unique: true,
    minLen

  }
},{timestamps:true});

const subcatagoryModal = mongoose.model("subcatagory", subcatagorySchema);
module.exports = subcatagoryModal;