const slugify = require('slugify');
const asyncHandler = require('express-async-handler');
const ApiError = require('../utilis/apiError');

// @desc       del data from database
// @route      del api/v1/categories
// @access     private
exports.deleteFactory = (Model) => asyncHandler(async(req, res, next) => {
    const {id} = req.params;
    const  document = await Model.findByIdAndDelete(id);
    if(!document)
     return next(new ApiError(`${Model}  not found', 404`));
     res.status(200).json({message:`removed successfully ${id} `});
});

