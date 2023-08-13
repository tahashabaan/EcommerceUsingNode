const mongoose = require("mongoose");

const subcatagorySchema =  new mongoose.Schema({
  name:{
    type
  }
},{timestamps:true});

const subcatagoryModal = mongoose.model("subcatagory", subcatagorySchema);