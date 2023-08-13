const asyncHandler = require('express-async-handler');
const slugify = require('slugify');
const ApiError = require('../utilis/apiError');
const subcatagoryModal = require('../modlas/subcatagory');


// @desc       get data from database
// @route      get api/v1/categories
// @access     public
exports.getSubcatacoryServices =asyncHandler(async(req, res) => {
    const page = req.query.page||1; 
    const limit = req.query.limit|| 50;
    const skip
    const subcatagory = await subcatagoryModal.find();
    res.status(201).json({result:subcatagory.length, page,data:subcatagory})
});

// @desc       add data from database
// @route      post api/v1/categories
// @access     public
exports.createSubcatacoryService = asyncHandler(async(req, res) => {
    subcatagoryModal.find()
});

// @desc       get data from database
// @route      get api/v1/categories
// @access     public
exports.getSubcatacoryServiceById =asyncHandler(async(req, res) => {
    subcatagoryModal.find()
});

// @desc       updata data from database
// @route      put api/v1/categories
// @access     public
exports.updataSubcatacoryServiceById =asyncHandler(async(req, res) => {
    subcatagoryModal.find()
});

// @desc       del data from database
// @route      del api/v1/categories
// @access     public
exports.removeSubcatacoryServiceById  =asyncHandler(async(req, res) => {
    subcatagoryModal.find()
});

