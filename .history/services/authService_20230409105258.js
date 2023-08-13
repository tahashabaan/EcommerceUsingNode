const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const ApiError = require('../utilis/apiError');
const userModel = require('../modlas/userModal');


exports.signUp =asyncHandler(async(req, res, next) => {
// create user

 const isUser =await userModel.findOne({email:req.body.email})
 if(!isUser) { 

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
}
  else return next(new ApiError('user is finded.. you can sign in ', 404))

})

exports.signIn =asyncHandler(async(req, res, next) => {
// create user

 const isUser =await userModel.findO({email:req.body.email})
 if(isUser) { 

    //   const user = await userModel.create({
    //     name:req.body.name,
    //     email:req.body.email,
    //     password:req.body.password
    //  })

 // create token
 const token = await jwt.sign(
    {userId:isUser._id},
     process.env.JWT_SECRET_KEY, 
    {expiresIn:process.env.JWT_EXPIRE_TIME})

    res.status(201).json({data:user, token})
}
  else return next(new ApiError('user is finded.. you can sign in ', 404))

})


