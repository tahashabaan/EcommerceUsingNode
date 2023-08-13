const asyncHandler = require('express-async-handler');
const slugify = require('slugify');
const ApiError = require('../utilis/apiError');
const subcatagoryModal = require('../modlas/subcatagory');

exports.setCatagoryIdToBody = (req, res, next) => {
if(!req.body.catagory)  req.body.catagory = req.params.catagoryId;
 next();
}

exports.filterObj = (req, res, next) => {
  if(!req.body.catagory)  req.body.catagory = req.params.catagoryId;
   next();
  }
// @desc       get data from database
// @route      get api/v1/categories
// @access     public
exports.getSubcatacoryServices =asyncHandler(async(req, res) => {
    const page = req.query.page||1; 
    const limit = req.query.limit|| 7;
    const skip = (page-1) * limit;
    let filterObj ={};
    if (req.params.catagoryId) filterObj={catagory:req.params.catagoryId};

    const subcatagory = await subcatagoryModal.find({filterObj}).limit(limit).skip(skip);
    res.status(201).json({result:subcatagory.length, page,data:subcatagory})
});

// @desc       add data from database
// @route      post api/v1/categories
// @access     public
exports.createSubcatacoryService = asyncHandler(async(req, res) => {
  
    const {name, catagory} = req.body;
    const subcatagory = await subcatagoryModal.create({name, slug:slugify(name), catagory});
    res.status(200).json({data:subcatagory})
});

// @desc       get data from database
// @route      get api/v1/categories
// @access     public
exports.getSubcatacoryServiceById =asyncHandler(async(req, res, next) => {
   const {id} = req.params;
   const subcatagory = await subcatagoryModal.findById(id);
   if(!subcatagory)
     return next(new ApiError('subcatagory element not found', 404));
   res.status(202).json({data:subcatagory});
});

// @desc       updata data from database
// @route      put api/v1/categories
// @access     public
exports.updataSubcatacoryServiceById =asyncHandler(async(req, res, next) => {
    const {id} = req.params;
    const { name, catagory}= req.body;

    const subcatagory = await subcatagoryModal.findByIdAndUpdate(id, {name, catagory});
    if(!subcatagory) 
      return next(new ApiError('subcatagory element not found', 404));
    res.status(200).json({data:subcatagory});
    
});

// @desc       del data from database
// @route      del api/v1/categories
// @access     public
exports.removeSubcatacoryServiceById  =asyncHandler(async(req, res, next) => {
    const {id} = req.params;
    const  subcatagory = await subcatagoryModal.findByIdAndDelete(id);
    if(!subcatagory)
     return next(new ApiError('subcatagory element not found', 404));
     res.status(200).json({message:`removed successfully ${id} `});
});

