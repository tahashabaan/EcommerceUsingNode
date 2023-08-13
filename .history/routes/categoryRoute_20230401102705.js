const express = require('express');
const multer  = require('multer')
const {getcatagoryValidator,
       createcatagoryValidator, 
       updatacatagoryValidator, 
       deletecatagoryValidator}
      =require('../utilis/validated/catagoryValidator');

const { getCategory, 
       getCategoryById, 
       createCategory, 
       updateCategory, 
       deleteCategory } 
      = require('../services/categoryService');
const subcatagoryRoute = require('./subCatagoryRoute');


const router = express.Router();
const upload = multer({dest:'uploads/catagory'})

router.route('/').get(getCategory).post(
      upload.single('image'),
      (req, res, next) => {
      createcatagoryValidator,
      createCategory);

router.route('/:id')
     .get(getcatagoryValidator, getCategoryById)
     .put(updatacatagoryValidator, updateCategory)
     .delete(deletecatagoryValidator, deleteCategory);
     
router.use('/:catagoryId/subcategories', subcatagoryRoute);

module.exports = router;