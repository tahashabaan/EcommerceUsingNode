const asyncHandler = require('express-async-handler');
const shopingCart= require('../modlas/shopingCartModal');



exports.addProductToShopingCart = asyncHandler( async(req, res, next) =>{
  let items =   await shopingCart.findById(req.user.cartId) ;
  if(!items) {
      items = await shopingCart.create(req.body)
    } else{
        items.quantity += 1;    
    }
    items.totalPrice += items.price*items.quantity;

    res.status(201).json({
        status:true,
        message:'product added to your cart',
        data:items
    })
})