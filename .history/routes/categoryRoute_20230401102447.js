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

router.route('/').get(getCategory).post(createcatagoryValidator,image,createCategory);

router.route('/:id')
     .get(getcatagoryValidator, getCategoryById)
     .put(createcatagoryValidator, updateCategory)
     .delete(updatacatagoryValidator, deleteCategory);
     
router.use('/:catagoryId/subcategories', subcatagoryRoute);

module.exports = router;