const sharp = require('sharp');

const brandModal = require('../modlas/brandModal');
const uploadBrand = require('./handle/handleSingleImage');
const {handleImageUp}
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

exports.createBrandModal =createDocument(brandModal);

// @desc       gete data od brand modal from database
// @route      get api/v1/brand
// @access     public
exports.getBrandModal = getDocuments(brandModal);

// @desc  get data from database by id 
// @route get api/v1/brand
// @acess public
exports.getBrandModalById = getDocumentById(brandModal);


// @desc  updata brand in database by id 
// @route put api/v1/brand
// @acess public
exports.updataBrandModalById = updataDocumentById(brandModal);

// @desc  delete brand from database by id 
// @route delete api/v1/brand
// @acess public
exports.delBrandModalById = deleteDocumentById(brandModal);