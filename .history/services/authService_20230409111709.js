const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const ApiError = require('../utilis/apiError');
const userModel = require('../modlas/userModal');


const createToken = (payload) => {
  return jwt.sign(
    {userId:payload},
     process.env.JWT_SECRET_KEY, 
    {expiresIn:process.env.JWT_EXPIRE_TIME})
}
exports.signUp =asyncHandler(async(req, res, next) => {
// create user
// create
      const user = await userModel.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
     })

 // create token
 const token = await jwt.sign(
    {userId:user._id},
     process.env.JWT_SECRET_KEY, 
    {expiresIn:process.env.JWT_EXPIRE_TIME})

    res.status(201).json({data:user, token})

})

exports.signIn =asyncHandler(async(req, res, next) => {
// create user

 const user =await userModel.findOne({email:req.body.email})
 if(!user || bcrypt.compare(req.body.password, user.password) ) { 
   return next(new ApiError('user or password not valid', 404))
 }

 // create token
 const token = await jwt.sign(
    {userId:user._id},
     process.env.JWT_SECRET_KEY, 
    {expiresIn:process.env.JWT_EXPIRE_TIME})

    res.status(201).json({data:user, token})


})


