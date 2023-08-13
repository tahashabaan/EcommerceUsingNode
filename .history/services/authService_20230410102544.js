/* eslint-disable arrow-body-style */
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
 const user = await userModel.create({
  name:req.body.name,
  email:req.body.email,
  password:req.body.password
})
 // create token
 const token = await createToken(user._id);
 res.status(201).json({data:user, token})
})

exports.signIn =asyncHandler(async(req, res, next) => {
  // search on email
 const user =await userModel.findOne({email:req.body.email});
 if(!user || ! await bcrypt.compare(req.body.password, user.password) ) { 
   return next(new ApiError('user or password not valid', 404))
 }
 // create token
 const token = await createToken(user._id);
 res.status(201).json({data:user, token})
})

exports.protect = asyncHandler(async(req, res, next) => {
    // 1) Check if token exist, if exist get
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split('/')[1];
    }
    if (!token) {
      return next(
        new ApiError(
          'You are not login, Please login to get access this route',
          401
        )
      );
    }

 
   const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
 
   const currenUser = await userModel.findById(decoded.userId);

   // user found or not
   if(!currenUser) 
       return next(new ApiError('not find user of this token', 404));

   // changepassword
   
     const changePasswordAt = parseInt( currenUser.passwordChangedAt.getTime()/1000, 10);
     if(changePasswordAt > decoded.iat)
        return next(new ApiError('the password is changed aleerdy', 402));
  req.user = currenUser;
  next()
})


