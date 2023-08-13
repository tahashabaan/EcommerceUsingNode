const mongoose = require("mongoose");

const subcatagorySchema =  new mongoose.Schema({
  name:{
    type: 'string',

  }
},{timestamps:true});

const subcatagoryModal = mongoose.model("subcatagory", subcatagorySchema);
module