const express = require('express');
const {getcatagoryValidator, createcatagoryValidator, updatacatagoryValidator, deletecatagoryValidator}=require('../utilis/validated/catagoryValidator');

const {getCategory,getCategoryById, createCategory, updateCategory, deleteCategory } = require('../services/categoryService');

const router = express.Router();

router.route('/').get(getCategory).post(createCategory);

router.route('/:id')
     .get( getcatagoryValidator, getCategoryById)
     .put(createcatagoryValidator, updateCategory)
     .delete(updatacatagoryValidator, deleteCategory);
     

module.exports = router;