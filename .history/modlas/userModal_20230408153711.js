
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';

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

// userSchame.pre('save' , async(next) => {
//    this.password = await bcrypt.hash(this.password, 12);
//    next();
// })

module.exports = mongoose.model('users', userSchame);
