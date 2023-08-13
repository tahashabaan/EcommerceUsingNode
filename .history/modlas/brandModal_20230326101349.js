const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    name:{
        type:S,
        nique:true,
        minLength:3,
        maxLength:14, 
    }
})