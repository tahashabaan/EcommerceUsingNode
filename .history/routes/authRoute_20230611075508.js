const express = require('express');
const {check} = require('express-validator');

const {signUp, signIn, forgetPassword } =require('../services/authService');
const {signUpValidator, signInValidator}  = require('../utilis/validated/authValidator')

// const validationMidllware = require('../utilis/validated/validationMidllware');

const router = express.Router();
// email , password  
router.route('/signup').post(validationMidllware([
    check('email').isEmail().isEmpty().withMessage('must not empty & email'),

    ]),signUp)

router.route('/signup').post(signUpValidator,signUp)
router.route('/login').post(signInValidator,signIn)
router.route('/forgetPassword').post(forgetPassword)


module.exports = router;
