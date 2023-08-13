const asyncHandler = require('express-async-handler');
const shopingCart= require('../modlas/shopingCartModal');



exports.addProductToShopingCart = asyncHandler( async(req, res, next) =>{
   const {productId,quantity, color } = req.body;

    let items =   await shopingCart.findOne({user: req.user._id}) ;
  if(!items) {
      items = await shopingCart.create({
        user:req.user._id,
        cartItems:{$a}
      })
    } else{
        items.quantity += 1;    
    }
   

    res.status(201).json({
        status:true,
        message:'product added to your cart',
        data:items
    })
})