const mongoose = require("mongoose");

const subcatagorySchema =  new mongoose.Schema({
  name:
},{timestamps:true});

const subcatagoryModal = mongoose.model("subcatagory", subcatagorySchema);