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
  password:{
    type:'String',
    require:true,
    trim:true,
    minLength:6
  } ,
  profileImage:{
    type:'String',
    require:true,
  },
  phone:String,
  rule:{
    type:'String',
    enum:['user', 'admin'],
    default:'user'
  },
  active
},{timestamps:true})

module.exports = mongoose.Model('users', userSchame);
