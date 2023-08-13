const mongoose = require("mongoose");

const subcatagorySchema =  new mongoose.Schema({

},{timestamps:});

const subcatagoryModal = mongoose.model("subcatagory", subcatagorySchema);