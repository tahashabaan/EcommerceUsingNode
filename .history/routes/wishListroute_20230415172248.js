const express = require('express');

const {
      addProductToWishList, 
       removeProductFromWishList} = require('../services/wishlistService')
cons
const router = express.Router();

router.route('/').post(addProductToWishList);
router.route('/').delete(removeProductFromWishList);



module.exports = router;