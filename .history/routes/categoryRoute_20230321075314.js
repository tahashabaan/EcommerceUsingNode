const express = require('express');
const {getcatagoryValidator, craetecatagoryValidator } = require('../utilis/validated/catagoryValidator');

const {getCategory,getCategoryById, createCategory, updateCategory, deleteCategory } = require('../services/categoryService');

const router = express.Router();

router.route('/api/v1/categories').get(getCategory).post(createCategory);

router.route('/api/v1/categories/:id')
     .get( getcatagoryValidator,getCategoryById)
     .put(craetecatagoryValidator,updateCategory)
     .delete(updatcatagoryValidator, deleteCategory);

module.exports = router;