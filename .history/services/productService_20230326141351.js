const slugfiy = require('slugify');
const asyncHandler = require('express-async-handler');
const productModal = require('../modlas/productModal');
const ApiError  = require('../middlewares/errorMiddleware');


// @desc   create a new product in database
// @route  post api/v1/products
// @acess  private
exports.createProduct = asyncHandler(async(req, res, next) => {

    req.body.slug = slugfiy(req.body.title)
    const product =  await  productModal.create(req.body); 
    res.status(201).json({data:product})
})

// @desc   read a new product in database
// @route  get api/v1/products
// @acess  public
exports.getProduct = asyncHandler(async(req, res, next) => {
    const {limit} = req.params||5; 
    const skip = (page-1)
    const product =  await  productModal.find().skip(skip).limit(limit); 
    res.status(201).json({data:product})
})

