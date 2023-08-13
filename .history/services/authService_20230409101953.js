const asyncHandler = require('express-async-handler');
const ApiError = require('../utilis/apiError');
const userModel = require('../modlas/userModal');
var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

exports.signUp =asyncHandler(async(req, res, next) => {
// create user
 const user = await userModel.create({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password
 })

 // create token



})


