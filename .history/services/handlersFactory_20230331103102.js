const asyncHandler = require('express-async-handler');
const slugify = require('slugify');
const ApiError = require('../utilis/apiError');
const subcatagoryModal = require('../modlas/subcatagory');

exports.deleteFactory = (Model) => asyncHandler(async(req, res, next) => {
    const {id} = req.params;
    const  document = await subcatagoryModal.findByIdAndDelete(id);
    if(!document)
     return next(new ApiError(`subcatagory  not found', 404`));
     res.status(200).json({message:`removed successfully ${id} `});
});

