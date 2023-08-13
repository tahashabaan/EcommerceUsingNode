const express = require('express');
const { param, validationResult } = require('express-validator');

const {getCategory,getCategoryById, createCategory, updateCategory, deleteCategory } = require('../services/categoryService');

const router = express.Router();

router.route('/api/v1/categories').get(getCategory).post(createCategory);
router.route('/api/v1/categories/:id').get(param('id').isMongoId(), (req, res)=>{},getCategoryById).put(updateCategory).delete(deleteCategory);

module.exports = router;