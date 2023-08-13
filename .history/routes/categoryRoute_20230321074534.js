const express = require('express');
const {getcatagoryValidator } = require('../utilis/validated/');

const {getCategory,getCategoryById, createCategory, updateCategory, deleteCategory } = require('../services/categoryService');

const router = express.Router();

router.route('/api/v1/categories').get(getCategory).post(createCategory);

router.route('/api/v1/categories/:id').get(
     getcatagoryValidator
     ,getCategoryById)
    .put(updateCategory)
    .delete(deleteCategory);

module.exports = router;