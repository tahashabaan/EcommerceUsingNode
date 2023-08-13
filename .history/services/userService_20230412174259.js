const bcrypt =require('bcryptjs')
const sharp = require('sharp');
const asyncHandler = require('express-async-handler');
const ApiError = require('../utilis/apiError');
const userModel = require('../modlas/userModal');
const {handleSingleImage} = require('./handle/handleImageUploading');
const {
    getDocuments,
    createDocument,
    getDocumentById,
    deleteDocumentById} =require('./handle/handlersFactory');

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
exports.createUser =createDocument(userModel);

// @desc       gete data od user modal from database
// @route      get api/v1/users
// @access     private
exports.getUsers = getDocuments(userModel);

// @desc  get data from database by id 
// @route get api/v1/users
// @acess private
exports.getUserById = getDocumentById(userModel);


// @desc  updata user in database by id 
// @route put api/v1/users
// @acess private
exports.updataUserById =  asyncHandler(async(req, res, next) => {
   const {id}  = req.params;
   
   const document  = await userModel.findByIdAndUpdate(id, 
    { name:req.body.name, 
      email:req.body.email, 
      profileImage:req.body.profileImage, 
      phone:req.body.phone, 
      active:req.body.active, 
      role:req.body.role }, {new:true})
    
   if(!document) return next(new ApiError(`No document for this id ${req.params.id}`, 404));
   res.status(201).json({ data: document });
})

// @desc  updata reset password in database by id 
// @route put api/v1/users
// @acess private

exports.changePasswordById =asyncHandler(async(req, res, next) => {

  const {id}  = req.params;
  const document  = await findByIdAndUpdate(id, 
    {
    password: await bcrypt.hash(req.body.password, 12),
    passwordChangedAt: Date.now(),
    }, 
    {new:true}
    )
  if(!document) return next(new ApiError(`No document for this id ${req.params.id}`, 404));
  res.status(201).json({ data: document });
})
// @desc  delete brand from database by id 
// @route delete api/v1/brand
// @acess public
exports.delUserById = deleteDocumentById(userModel);
// @desc    Get Logged user data
// @route   GET /api/v1/users/getMe
// @access  Private/Protect
exports.getLoggedUserData = asyncHandler(async (req, res, next) => {
  req.params.id = req.user._id;
  next();
});