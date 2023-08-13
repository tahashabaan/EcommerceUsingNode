const sharp = require('sharp');
const productModal = require('../modlas/productModal');
const {handleMultImages} = require('./handle/handleImageUploading');
const {
    getDocuments,
    createDocument,
    getDocumentById,
    updataDocumentById,
    deleteDocumentById} =require('./handle/handlersFactory')
 
exports.uploadProductImages = handleMultImages([
    { name: 'imageCover', maxCount: 1 },
    { name: 'images', maxCount: 50 }
]) 
exports.filterProductImages = (req, res, next) => {
    console.log(req.files)
    sharp(req.files.imageCover[0].buffer)
    .resize(2000, 1333)
    .toformat('jpeg')
    next();
}
// @desc   create a new product in database
// @route  post api/v1/products
// @acess  private
exports.createProduct = createDocument(productModal);

// @desc   read a  product from database
// @route  get api/v1/products
// @acess  public
exports.getProduct = getDocuments(productModal)

// @desc   read a  product from database
// @route  get api/v1/products
// @acess  public
exports.getProductByID = getDocumentById(productModal)

// @desc   updata a  product from database
// @route  get api/v1/products
// @acess  private
exports.updataProductByID = updataDocumentById(productModal);

// @desc   del a  product from database
// @route  del api/v1/products
// @acess  private
exports.deleteProductByID = deleteDocumentById(productModal);

