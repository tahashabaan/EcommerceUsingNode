const asyncHandler = require('express-async-handler');
const slugify = require('slugify');
const ApiError = require('../utilis/apiError');
const subcatagoryModal = require('../modlas/subcatagory');


// @desc       get data from database
// @route      get api/v1/categories
// @access     public
export
