
const productModal = require('../modlas/productModal');

const {
    getDocuments,
    createDocument,
    getDocumentById,
    updataDocumentById,
    deleteDocumentById} =require('./handle/handlersFactory')
 

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
exports.getProductByID = getDocumen

// @desc   updata a  product from database
// @route  get api/v1/products
// @acess  private
exports.updataProductByID = asyncHandler(async(req, res, next) => {
    const {id} = req.query;
    if(req.body.title) { req.body.slug = slugfiy(req.body.title)  }
    const product =  await  productModal.findByIdAndUpdate(id, req.body); 
    if(!product) return next(new ApiError('product not found', 404));
    res.status(201).json({ message:'product updated successfully'})
})

// @desc   del a  product from database
// @route  del api/v1/products
// @acess  private
exports.deleteProductByID = asyncHandler(async(req, res, next) => {
    const {id} = req.query;
    const product =  await  productModal.findByIdAndDelete(id); 
    if(!product) return next(new ApiError( "Product not found", 404,));
    res.status(201).json({ message:'product delete successfully'})
})


