const slugfiy = require('slugify');
const asyncHandler = require('express-async-handler');
const productModal = require('../modlas/productModal');
const ApiError  = require('../middlewares/errorMiddleware');
const ApiFeature = require('../utilis/apiFeature'0


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

//     let queryObject = {...req.query}
//     // basic filtration
//     const excludeFields = ['page', 'sort', 'limit', 'fields'];
//     excludeFields.forEach(item => delete queryObject[item]);
//     let queryString = JSON.stringify(queryObject);
//     queryString = queryString.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
//     queryObject = JSON.parse(queryString);

//    // pagination
//     const page = req.query.page * 1||1; 
//     const limit = req.query.limit * 1|| 50;
//     const skip = (page-1) * limit;

    
//     let mongooseQuery = productModal.find(queryObject)
//     .skip(skip)
//     .limit(limit)
//     .populate('catagory');
    
//     // sorting
//     if(req.query.sort) 
//     {
//         const sortBy = req.query.sort.split(',').join(' ')
//         mongooseQuery = mongooseQuery.sort(sortBy); } 
//     else { 
//         mongooseQuery = mongooseQuery.sort({ createdAt: - 1 }) }

//     // limited fields 
//      if(req.query.fields) 
//      {
//          const fileds = req.query.fields.split(',').join(' ');
//          mongooseQuery = mongooseQuery.select(fileds); 
//         } 
    
    
//     // searching
   
//     if(queryObject.title|| queryObject.description) {
        
//         queryObject.title = new RegExp(queryObject.title ,'i');
//         queryObject.description = new RegExp(queryObject.description ,'i');
      

//         // let query = {};
//         //   query.$or = [
//         //     {title:queryObject.keyword}, 
//         //     {description:queryObject.keyword}]
        
//             mongooseQuery = mongooseQuery.find(queryObject)
             
//     } 

const apiFeature =  new ApiFeature

    //execute
    const product =  await mongooseQuery;
   
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


