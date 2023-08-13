const slugify = require('slugify');
const multer = require('multer');
const sharp = require('sharp');
const asyncHandler = require('express-async-handler');

const brandModal = require('../modlas/brandModal');
const ApiError = require('../utilis/apiError');


// @desc       create brand modal  from database
// @route      post api/v1/brand
// @access     public
const fileFilter = (req, file, cb ) => {
    if (file.mimetype.startsWith('image')) cb(null, true)
    else cb(new ApiError('image only is allowed', 404), true);
}

const filterImageBrand = (req, res, next) => {
    sharp(req.file.buffer).toFormat('jpeg').resize(500, 500).j

}
const upload = multer({storage:multer.memoryStorage, fileFilter});
exports.brandIamge = upload.single('image');


exports.createBrandModal = asyncHandler ( async (req, res, next) => {
    const {name, image} = req.body;
    const brand = await  brandModal.create({name, slug:slugify(name) , image });
    res.status(201).json({data:brand});
    console.log(image)
})

// @desc       gete data od brand modal from database
// @route      get api/v1/brand
// @access     public
exports.getBrandModal = asyncHandler (async (req, res, next) => {
    const {page} = req.query||1; 
    const {limit}  = req.query||5; 
    const skip = (page-1) *limit;

    const brand = await  brandModal.find().skip(skip).limit(limit);
    res.status(201).json({result: brand.length, page, data:brand})
})

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