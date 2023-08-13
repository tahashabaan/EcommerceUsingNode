const asyncHandler = require('express-async-handler');
const shopingCart= require('../modlas/shopingCartModal');



exports.addProductToShopingCart = asyncHandler( async(req, res, next) =>{
    await shopingCart.findByIdAndUpdate() 
})