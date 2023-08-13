const sharp = require('sharp');

const userService = require('../modlas/userService');
const {handleSingleImage} = require('./handle/handleImageUploading');
const {
    getDocuments,
    createDocument,
    getDocumentById,
    updataDocumentById,
    deleteDocumentById} =require('./handle/handlersFactory')



exports.uploadUserIamge =handleSingleImage('image');
exports.filterImageUser = async (req, res, next) => {

    const uniqueName = `user-${Math.round(Math.random() *1E9)}-${Date.now()}.jpeg`;
    await sharp(req.file.buffer)
    .resize(600,600)
    .toFormat('jpeg')
    .jpeg({quality:95})
    .toFile(`uploads/users/${uniqueName}`)
  
    req.body.image = uniqueName;
    next();
  }

// @desc       create brand modal  from database
// @route      post api/v1/brand
// @access     private
exports.createBrandModal =createDocument(userService);

// @desc       gete data od brand modal from database
// @route      get api/v1/brand
// @access     public
exports.getBrandModal = getDocuments(userService);

// @desc  get data from database by id 
// @route get api/v1/brand
// @acess public
exports.getBrandModalById = getDocumentById(userService);


// @desc  updata brand in database by id 
// @route put api/v1/brand
// @acess public
exports.updataBrandModalById = updataDocumentById(userService);

// @desc  delete brand from database by id 
// @route delete api/v1/brand
// @acess public
exports.delBrandModalById = deleteDocumentById(userService);