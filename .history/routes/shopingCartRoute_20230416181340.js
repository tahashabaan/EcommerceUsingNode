const express = require('express');

const { 
    addProductToShopingCart,
    getLogedUserDate,
    removeProductFromShopingCart,
    clearProductFromCart} = require('../services/shopingCartService');

const authService = require('../services/authService')

const router = express.Router();

router.use( authService.protect, authService.allowTo('user'));

router.route('/')
.get( getLogedUserDate)
.post(addProductToShopingCart)
.delete(  )




module.exports = router;