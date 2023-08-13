const express = require('express');

const {signUp, signIn, forgetPassword } =require('../services/authService');
const {signUpValidator, signInValidator}  = require('../utilis/validated/authValidator')


const router = express.Router();
// email , password  
router.route('/signup').post(signUpValidator,signUp)
router.route('/login').post(signInValidator,signIn)
router.route('/forgetPassword').post(forgetPassword)


module.exports = router;
