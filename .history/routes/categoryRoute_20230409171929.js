const express = require('express');
const {getcatagoryValidator,
       createcatagoryValidator, 
       updatacatagoryValidator, 
       deletecatagoryValidator}
      =require('../utilis/validated/catagoryValidator');

const { getCategory, 
       getCategoryById, 
       createCategory, 
       updateCategory, 
       deleteCategory, 
       uploadCatagoryIamge,
       filterImage } 
      = require('../services/categoryService');
const subcatagoryRoute = require('./subCatagoryRoute');


const router = express.Router();


router.route('/')
  .get(getCategory)
  .post(
      uploadCatagoryIamge,
      filterImage,
      createcatagoryValidator,
      createCategory);

router.route('/:id')
     .get(getcatagoryValidator, getCategoryById)
     .put(
      updatacatagoryValidator, updateCategory)
     .delete(deletecatagoryValidator, deleteCategory);
     
router.use('/:catagoryId/subcategories', subcatagoryRoute);

module.exports = router;