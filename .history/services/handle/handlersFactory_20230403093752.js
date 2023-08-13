const slugify = require('slugify');
const asyncHandler = require('express-async-handler');
const ApiError = require('../../utilis/apiError');
const ApiFeature = require('../../utilis/apiFeature');


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
    
      const countDoc = await productModal.countDocuments();
    
      const apiFeature =  new ApiFeature(productModal, req.query)
      .paginate(countDoc)
      .filter()
      .fileds()
      .sort()
      .search();
          const {mongooseQuery, paginateResults} = apiFeature;
        //execute
        const product =  await mongooseQuery;
       
        res.status(201).json({result:product.length, paginate:paginateResults, data:product})
    })

// @desc   create a new document in database
// @route  post api/v1/document
// @acess  private
exports.createDocument = asyncHandler(async(req, res, next) => {
    await  productModal.create(req.body); 
    res.status(201).json({message:'document added successfully'})
})


// @desc       del data from database
// @route      del api/v1/feature
// @access     private
exports.deleteFactory = (Model) => asyncHandler(async(req, res, next) => {
    const {id} = req.params;
    const  document = await Model.findByIdAndDelete(id);
    if(!document)
     return next(new ApiError(`${Model}  not found', 404`));
     res.status(200).json({message:`removed successfully ${id} `});
});

