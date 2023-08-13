const slugify = require('slugify');
const asyncHandler = require('express-async-handler');
const ApiError = require('../../utilis/apiError');
const ApiFeature = require('../../utilis/apiFeature');




// @desc   create a new document in database
// @route  post api/v1/document
// @acess  private
exports.slugMiddleware

exports.createProduct = asyncHandler(async(req, res, next) => {

    req.body.slug = slugfiy(req.body.title)
     await  productModal.create(req.body); 
    res.status(201).json({message:'product added successfully'})
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

