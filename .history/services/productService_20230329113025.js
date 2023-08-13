const slugfiy = require('slugify');
const asyncHandler = require('express-async-handler');
const productModal = require('../modlas/productModal');
const ApiError  = require('../middlewares/errorMiddleware');


// @desc   create a new product in database
// @route  post api/v1/products
// @acess  private
exports.createProduct = asyncHandler(async(req, res, next) => {

    req.body.slug = slugfiy(req.body.title)
     await  productModal.create(req.body); 
    res.status(201).json({message:'product added successfully'})
})

// @desc   read a  product from database
// @route  get api/v1/products
// @acess  public
exports.getProduct = asyncHandler(async(req, res, next) => {
    console.log(req.query)
    const {page} = req.query * 1 || 1;
    const {limit} = req.query * 1 || 5; 
    const skip = (page - 1) * limit;
    cosnole.log(page, limit, skip)
    const product =  await  productModal.find()
    .skip(skip)
    .limit(limit)
    .populate({path:"catagory", select:"name -_id" }); 
    res.status(201).json({result:product.length, page, data:product})
})

// @desc   read a  product from database
// @route  get api/v1/products
// @acess  public
exports.getProductByID = asyncHandler(async(req, res, next) => {
    const {id} = req.query;
  
    const product =  await  productModal.findById(id)
    .populate({path:"catagory", select:"name -_id" }); ; 
    res.status(201).json({ data:product})
})

// @desc   updata a  product from database
// @route  get api/v1/products
// @acess  private
exports.updataProductByID = asyncHandler(async(req, res, next) => {
    const {id} = req.query;
    if(req.body.title) { req.body.slug = slugfiy(req.body.title)  }
    const product =  await  productModal.findByIdAndUpdate(id, req.body); 
    if(!product) return next(new ApiError('product not found', 404));
    res.status(201).json({ message:'product updated successfully'})
})

// @desc   del a  product from database
// @route  del api/v1/products
// @acess  private
exports.deleteProductByID = asyncHandler(async(req, res, next) => {
    const {id} = req.query;
    const product =  await  productModal.findByIdAndDelete(id); 
    if(!product) return next(new ApiError( "Product not found", 404,));
    res.status(201).json({ message:'product delete successfully'})
})


