const express = require('express');

const {
       addProductToWishList, 
       removeProductFromWishList} = require('../services/wishListService')

const router = express.Router();


module.exports = router;