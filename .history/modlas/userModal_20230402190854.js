const mongoose = require('mongoose');


const userSchame = new mongoose.Schema({
  name:{
    type:'String',
    require:true,
    trim:true
  } ,
  slug:{
    type:'String',
    lowercase:true
  },
  email:{
    type:'String',
    require:true,
    trim:true
  } ,
  ,
  email:{
    type:'String',
    require:true,
    trim:true
  } ,
})
