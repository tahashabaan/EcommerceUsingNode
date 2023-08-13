const mongoose = require("mongoose");

const subcatagorySchema =  new mongoose.Schema({
  name:{
    ty
  }
},{timestamps:true});

const subcatagoryModal = mongoose.model("subcatagory", subcatagorySchema);