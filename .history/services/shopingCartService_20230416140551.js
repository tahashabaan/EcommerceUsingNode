const asyncHandler = require('express-async-handler');
const shopingCart= require('../modlas/shopingCartModal');



exports.addProductToShopingCart = asyncHandler( async(req, res, next) =>{
  let items =   await shopingCart.findOne({user: req.user._id}) ;
  if(!items) {
      items = await shopingCart.create({
        
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