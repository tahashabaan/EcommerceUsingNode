const slugify = require('slugify');
const sharp = require('sharp');
const asyncHandler = require('express-async-handler');

const brandModal = require('../modlas/brandModal');
const ApiError = require('../utilis/apiError');
const uploadBrand = require('./handle/handleSingleImage');
const {
    getDocuments,
    createDocument,
    getDocumentById,
    updataDocumentById,
    deleteDocumentById} =require('./handle/handlersFactory')

exports.uploadBrandIamge =uploadBrand;

exports.filterImageBrand = async (req, res, next) => {

    const uniqueName = `brand-${Math.round(Math.random() *1E9)}-${Date.now()}.jpeg`;
    await sharp(req.file.buffer)
    .resize(600,600)
    .toFormat('jpeg')
    .jpeg({quality:95})
    .toFile(`uploads/brand/${uniqueName}`)
  
    req.body.image = uniqueName;
    next();
  }


  
// @desc       create brand modal  from database
// @route      post api/v1/brand
// @access     private

exports.createBrandModal =createDocument;

// @desc       gete data od brand modal from database
// @route      get api/v1/brand
// @access     public
exports.getBrandModal = getDocume

// @desc  get data from database by id 
// @route get api/v1/brand
// @acess public
exports.getBrandModalById = asyncHandler(async(req, res, next) => {
    const { id } = req.params;
    const brand = await brandModal.findById(id); 
    res.status(201).json({ data:brand})
}
)


// @desc  updata brand in database by id 
// @route put api/v1/brand
// @acess public
exports.updataBrandModalById = asyncHandler(async(req, res, next) => {
    const {name, image} = req.params;
    const { id } = req.params;
    const brand = await brandModal.findByIdAndUpdate(id,{name, image}); 
    if(!brand)
     return next(new ApiError('the element not found', 404));
     res.status(201).json({ message:"the element has been updated"})
}
)

// @desc  delete brand from database by id 
// @route delete api/v1/brand
// @acess public
exports.delBrandModalById = asyncHandler(async(req, res, next) => {
    const { id } = req.params;
    const brand = await brandModal.findByIdAndDelete(id); 
    if(!brand)
     return next(new ApiError('the element not found', 404));
    res.status(201).json({ message:"the element has been delteded"})
}
)