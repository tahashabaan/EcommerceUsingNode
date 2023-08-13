/* eslint-disable import/no-extraneous-dependencies */
const slugify = require('slugify');
const multer  = require('multer')
const sharp = require('sharp');
const asyncHandler = require('express-async-handler')
const catagoryModal = require('../modlas/catagory');
const ApiError = require('../utilis/apiError');

// const storage  = multer.diskStorage({

//    destination: function (req, file, cb) {
//      cb(null, 'uploads/catagory'); 
//    },
//    filename:function (req, file, cb) {
//       const ext = file.mimetype.split('/')[1];
//       const uniqueFilename = `catagory-${Math.round(Math.random()*1E9)}-${Date.now()}.${ext}`
//       cb(null, uniqueFilename);
//       console.log(file) 
//       console.log(req.body)
//     }
// })

const storage = multer.memoryStorage()
const fileFilter = (req, file, cb ) => {

   if (file.mimetype.startsWith('image'))  cb(null, true)
   else  cb(new ApiError('only image allowed', 404), false)

   //   const fileTypes = /jpeg|jpg|png|gif|svg/;
   //   const extName =fileTypes.test(path.extname(file.originalname).toLowerCase());
   //   const mimeType = fileTypes.test(file.mimetype);

   //   if(extName && mimeType) cb(null, true)
   //   else cb(null, false)

}
const upload = multer({storage, fileFilter})


exports.uploadCatagoryIamge = upload.single('image');

exports.filterImage = (req, res, next) => {

  const uniqueFilename = `catagory-${Math.round(Math.random()*1E9)}-${Date.now()}.jpeg`
  sharp(req.file.buffer)
  .resize(500,500)
  .toFormat('jpeg')
  .jpeg({quality:90})
  .toFile(`uploads/catagory/${uniqueFilename}`)
  next();
}

// @desc       get data from database
// @route      get api/v1/categories
// @access     public
exports.getCategory = asyncHandler(async (req, res) => {
   const page = req.query.page *1 || 1;  
   const limit = req.query.limit*1 || 5 ;
   const skip = (page-1) * limit;

    const category= await catagoryModal.find().skip(skip).limit(limit);
    res.status(200).json({results:category.length, page, data: category})
})

// @desc      get data in database specify params id
// @route     get api/v1/categories:id
// @access    public
exports.getCategoryById = asyncHandler(async (req, res, next) => {
    const {id} = req.params;
    const category= await catagoryModal.findById(id);
   //  res.status(400).json({ message: "category not found"}
    if(!category){
      return next (new ApiError("category not found", 404))
    }
    res.status(200).json({ data: category})
})
// @desc      add data in database
// @route     post api/v1/categories
// @access    public
exports.createCategory = asyncHandler(async (req, res) => {

      const {name, image} = req.body;
      const catagory = await catagoryModal.create({name,image, slug:slugify(name)});
      res.status(201).json({data:catagory});

})

// @desc      update data in database by params id
// @route     put api/v1/categories: id
// @access    public
exports.updateCategory = asyncHandler(async (req, res, next) => {
   
   const {name} = req.body;
   const {id} = req.params;
   const catagory = await catagoryModal.findByIdAndUpdate(id, {name, slug:slugify(name)},{new:true});
   // res.status(400).json({ message: "category not found"})
   if(!catagory){
      return next (new ApiError("category not found", 404))
    }
   res.status(201).json({data:catagory});

})

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