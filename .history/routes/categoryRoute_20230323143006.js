const express = require('express');
const {getcatagoryValidator, createcatagoryValidator, updatacatagoryValidator, deletecatagoryValidator}=require('../utilis/validated/catagoryValidator');
const {getCategory,getCategoryById, createCategory, updateCategory, deleteCategory } = require('../services/categoryService');
const subcatagoryRoute = require('./subCatagoryRoute')

const router = express.Router();

router.route('/').get(getCategory).post(createCategory);

router.route('/:id')
     .get( getcatagoryValidator, getCategoryById)
     .put(createcatagoryValidator, updateCategory)
     .delete(updatacatagoryValidator, deleteCategory);

router.route('/:catagoryId/subcategories').use(, )subcatagoryRoute)    

module.exports = router;