const sharp = require('sharp');

const userModel = require('../modlas/userModal');
const {handleSingleImage} = require('./handle/handleImageUploading');
const {
    getDocuments,
    createDocument,
    getDocumentById,
    updataDocumentById,
    deleteDocumentById} =require('./handle/handlersFactory')



exports.uploadUserIamge =handleSingleImage('profileImage');

exports.filterImageUser = async (req, res, next) => {

    const uniqueName = `user-${Math.round(Math.random() *1E9)}-${Date.now()}.jpeg`;
    await sharp(req.file.buffer)
    .resize(2000,1333)
    .toFormat('jpeg')
    .jpeg({quality:95})
    .toFile(`uploads/users/${uniqueName}`)
  
    req.body.profileImage = uniqueName;
    next();
  }

// @desc       create user modal  from database
// @route      post api/v1/users
// @access     private
exports.createBrandModal =createDocument(userModel);

// @desc       gete data od user modal from database
// @route      get api/v1/users
// @access     private
exports.getBrandModal = getDocuments(userModel);

// @desc  get data from database by id 
// @route get api/v1/users
// @acess private
exports.getBrandModalById = getDocumentById(userModel);


// @desc  updata brand in database by id 
// @route put api/v1/users
// @acess private
exports.updataBrandModalById = updataDocumentById(userModel);

// @desc  delete brand from database by id 
// @route delete api/v1/brand
// @acess public
exports.delBrandModalById = deleteDocumentById(userModel);