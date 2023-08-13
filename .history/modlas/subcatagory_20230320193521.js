const mongoose = require("mongoose");

const subcatagorySchema =  new mongoose.Schema({
  name:{
    type: 'string',
    unique: true,
    min

  }
},{timestamps:true});

const subcatagoryModal = mongoose.model("subcatagory", subcatagorySchema);
module.exports = subcatagoryModal;