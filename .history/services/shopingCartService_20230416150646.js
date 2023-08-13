const asyncHandler = require('express-async-handler');
const shopingCart= require('../modlas/shopingCartModal');
const product= require('../modlas/productModal');



exports.addProductToShopingCart = asyncHandler( async(req, res, next) =>{
   const {productId,quantity, color } = req.body;
    const {price} = await product.findById(productId)
    let items =   await shopingCart.findOne({user: req.user._id});

    if(!items) {
      items = await shopingCart.create({
        user:req.user._id,
        cartItems:[{productId, price, color}]
      })
    } else {
      const cartItemIsFound =items.cartItems.findIndex(item => item.product.toString() === productId && item.color === color) 
  console.log()
        // items.quantity += 1; 
        // await shopingCart.save();   
    }
   

    res.status(201).json({
        status:true,
        message:'product added to your cart',
        data:items
    })
})