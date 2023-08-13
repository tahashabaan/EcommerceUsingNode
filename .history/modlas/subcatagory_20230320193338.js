const mongoose = require("mongoose");

const subcatagorySchema =  new mongoose.Schema({

},{timestamps:true});

const subcatagoryModal = mongoose.model("subcatagory", subcatagorySchema);