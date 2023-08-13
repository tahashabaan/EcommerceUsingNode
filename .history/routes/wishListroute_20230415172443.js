const express = require('express');

const {
      addProductToWishList, 
       removeProductFromWishList} = require('../services/wishlistService')
const authService = require('../routes/au')

const router = express.Router();

router.route('/').post(
    authService.protect,
    authService.allowTo('user'),
    addProductToWishList);
router.route('/').delete(removeProductFromWishList);



module.exports = router;