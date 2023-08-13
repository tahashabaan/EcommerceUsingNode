
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchame = new mongoose.Schema({
  name:{
    type:'String',
    required:true,
    trim:true
  } ,
  slug:{
    type:'String',
    lowercase:true
  },
  email:{
    type:'String',
    required:true,
    trim:true
  } ,
  password:{
    type:'String',
    required:true,
    trim:true,
    minLength:6
  } ,
  passwordChangedAt:
  profileImage:{
    type:'String',
  },
  phone:String,
  role:{
    type:'String',
    enum:['user', 'admin'],
    default:'user'
  },
  active:{
    type:'Boolean',
    default:true
  }
},{timestamps:true})

userSchame.pre('save' , async function (next){
   this.password = await bcrypt.hash(this.password, 10);
   next();
})

module.exports = mongoose.model('users', userSchame);
