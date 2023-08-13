const shopingCart= require('../modlas/shopingCartModal');
const asyncHandler = require('express-async-handler');



exports.addProductToShopingCart = (req, res, next) =>{
    shopingCart.create(req.body)
}