const express = require('express');
const {check} = require('express-validator');

const {signUp, signIn, forgetPassword } =require('../services/authService');
const {signUpValidator, signInValidator}  = require('../utilis/validated/authValidator')
const validationMidllware = require('../utilis/val')

const router = express.Router();
// email , password  
router.route('/signup').post([check('email').isEmail().isEmpty().withMessage('')],signUp)

router.route('/signup').post(signUpValidator,signUp)
router.route('/login').post(signInValidator,signIn)
router.route('/forgetPassword').post(forgetPassword)


module.exports = router;
