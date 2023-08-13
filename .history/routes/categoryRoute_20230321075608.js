const express = require('express');
const {getcatagoryValidator, createcatagoryValidator, updatacatagoryValidator } = require('../utilis/validated/catagoryValidator');

const {getCategory,getCategoryById, createCategory, updateCategory, deleteCategory } = require('../services/categoryService');

const router = express.Router();

router.route('/api/v1/categories').get(getCategory).post(createCategory);

router.route('/api/v1/categories/:id')
     .get( getcatagoryValidator, getCategoryById)
     .put(createcatagoryValidator, updateCategory)
     .delete(updatacatagoryValidator, deleteCategory);

module.exports = router;