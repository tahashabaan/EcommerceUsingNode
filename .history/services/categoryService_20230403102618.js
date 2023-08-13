/* eslint-disable import/no-extraneous-dependencies */
const slugify = require('slugify');
const sharp = require('sharp');
const asyncHandler = require('express-async-handler')

const catagoryModal = require('../modlas/catagory');
const uploadCatagory = require('./handle/handleSingleImage');
const ApiError = require('../utilis/apiError');
const {
   getDocuments,
   createDocument,
   getDocumentById,
   updataDocumentById,
   deleteDocumentById} =require('./handle/handlersFactory')




exports.uploadCatagoryIamge = uploadCatagory;

exports.filterImage =async (req, res, next) => {

  const uniqueFilename = `catagory-${Math.round(Math.random()*1E9)}-${Date.now()}.jpeg`
  await sharp(req.file.buffer)
  .resize(500,500)
  .toFormat('jpeg')
  .jpeg({quality:90})
  .toFile(`uploads/catagory/${uniqueFilename}`)

  req.body.image = uniqueFilename;
  next();
}

// @desc       get data from database
// @route      get api/v1/categories
// @access     public
exports.getCategory = getDocuments(catagoryModal);

// @desc      add data in database
// @route     post api/v1/categories
// @access    private
exports.createCategory = createDocument(catagoryModal)

// @desc      get data in database specify params id
// @route     get api/v1/categories:id
// @access    public
exports.getCategoryById =getDocumentById(catagoryModal)

// @desc      update data in database by params id
// @route     put api/v1/categories: id
// @access    public
exports.updateCategory = updataDocumentById(catagoryModal);

// @desc      delete data in database by params id
// @route     delete api/v1/categories: id
// @access    public
exports.deleteCategory = asyncHandler(async (req, res, next) => {
   
   const {id} = req.params;
   const catagory = await catagoryModal.findByIdAndDelete(id);
   res.status(400).json({ message: "category not found"})
   if(!catagory){
      return next (new ApiError("category not found", 404))
    }
   res.status(204).json({ message: "category is deleted"});

})