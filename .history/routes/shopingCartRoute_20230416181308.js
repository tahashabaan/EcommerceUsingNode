const express = require('express');

const { 
    addProductToShopingCart,
    
    removeProductFromShopingCart
} = require('../services/shopingCartService');

const authService = require('../services/authService')

const router = express.Router();

router.use( authService.protect, authService.allowTo('user'));

router.route('/')
.post(addProductToShopingCart)
.delete(  )
.get( )




module.exports = router;