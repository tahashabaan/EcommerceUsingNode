const express = require('express');
const {getcatagoryValidator } = require('../utilis/validated/catagoryValidator');

const {getCategory,getCategoryById, createCategory, updateCategory, deleteCategory } = require('../services/categoryService');

const router = express.Router();

router.route('/api/v1/categories').get(getCategory).post(createCategory);

router.route('/api/v1/categories/:id')
     .get( getcatagoryValidator,getCategoryById)
     .put(craecatagoryValidator,updateCategory)
     .delete(getcatagoryValidator, deleteCategory);

module.exports = router;