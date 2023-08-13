const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const ApiError = require('../utilis/apiError');
const userModel = require('../modlas/userModal');


exports.signUp =asyncHandler(async(req, res, next) => {
// create user
 const user = await userModel.create({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password
 })

 // create token
 jwt.sign({userIuser._id})


})


