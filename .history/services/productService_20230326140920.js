const slugfiy = require('slugify');
const asyncHandler = require('express-async-handler');
const productModal = require('../modlas/productModal');
const ApiError  = require('../middlewares/errorMiddleware');


// @desc   create a new product in database
// @route  post api/v1/products
// @acess  public
exports.createProduct = asyncHandler(async(req, res, next) => {
   const product =  await  productModal.create(req.body) 
})

