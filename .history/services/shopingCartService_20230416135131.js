const asyncHandler = require('express-async-handler');
const shopingCart= require('../modlas/shopingCartModal');



exports.addProductToShopingCart = asyncHandler( async(req, res, next) =>{
  let items =   await shopingCart.findById(req.body.cartId) ;

  if(!items) {
    items = await shopingCart.create(req.body)
  } else{

  }
})