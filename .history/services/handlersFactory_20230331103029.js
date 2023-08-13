const asyncHandler = require('express-async-handler');
const slugify = require('slugify');
const ApiError = require('../utilis/apiError');
const subcatagoryModal = require('../modlas/subcatagory');

exports.deleteFactory = (Model) => asyncHandler(async(req, res, next) => {
    const {id} = req.params;
    const  subcatagory = await subcatagoryModal.findByIdAndDelete(id);
    if(!subcatagory)
     return next(new ApiError('subcatagory element not found', 404));
     res.status(200).json({message:`removed successfully ${id} `});
});

