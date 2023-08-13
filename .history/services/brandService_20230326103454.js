const slugify = require('slugify');
const asyncHandler = require('express-async-handler')
const brandModal = require('../modlas/brandModal');
const ApiError = require('../utilis/apiError');


// @desc       create brand modal  from database
// @route      post api/v1/categories
// @access     public
exports.createBrandModal = asyncHandler ( async (req, res, next) => {
    const {name, image} = req.body;
    const brand = await  brandModal.create({name, image, slug:slugify(name)  });
    res.status(201).json({data:brand})
})

// @desc       gete data od brand modal from database
// @route      get api/v1/categories
// @access     public
exports.getBrandModal = asyncHandler (async (req, res, next) => {
    const {page} = req.query; const limit  = req
    const brand = await  brandModal.find();
    res.status(201).json({result: brand.length, page, data:brand})
})