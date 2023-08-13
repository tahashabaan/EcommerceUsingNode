const slugify = require('slugify');
const asyncHandler = require('express-async-handler')
const brandModal = require('../modlas/brandModal');
const ApiError = require('../utilis/apiError');


// @desc       create brand modal  from database
// @route      post api/v1/categories
// @access     public
exports.createBrandModal = asyncHandler ((req, res, next) => {
    brandModal.create
})

// @desc       gete data od brand modal from database
// @route      get api/v1/categories
// @access     public
exports.getBrandModal = (req, res, next) => {
    
}