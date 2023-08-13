const slugify = require('slugify');
const asyncHandler = require('express-async-handler');
const ApiError = require('../../utilis/apiError');
const ApiFeature = require('../../utilis/apiFeature');


// @desc   read a  documents from database
// @route  get api/v1/documents
// @acess  public
exports.getDocuments = (Model) =>
  asyncHandler(async(req, res, next) => {
      const countDoc = await productModal.countDocuments();
      const apiFeature =  new ApiFeature(Model, req.query)
      .paginate(countDoc)
      .filter()
      .fileds()
      .sort()
      .search();
     const {mongooseQuery, paginateResults} = apiFeature;
        //execute
     const  product =  await mongooseQuery;  
     res.status(201).json({result:product.length, paginate:paginateResults, data:product})
 })

// @desc   create a new document in database
// @route  post api/v1/document
// @acess  private
exports.createDocument = (Model) => 
  asyncHandler(async(req, res, next) => {
    await  Model.create(req.body); 
    res.status(201).json({message:'document added successfully'})
})

// @desc   read a  product from database
// @route  get api/v1/products
// @acess  public
exports.getDocumentById = (Model) =>
  asyncHandler(async(req, res, next) => {
    const {id} = req.query;
    const document =  await  Model.findById(id)
    .populate({path:"catagory", select:"name -_id" }); ; 
    res.status(201).json({ data:document})
})
// @desc       del data from database
// @route      del api/v1/feature
// @access     private
exports.deleteDocumentById = (Model) => 
  asyncHandler(async(req, res, next) => {
    const {id} = req.params;
    const  document = await Model.findByIdAndDelete(id);
    if(!document)
     return next(new ApiError(`${Model}  not can found this document', 404`));
     res.status(200).json({message:`removed document successfully ${id} `});
});

