const express = require('express');
const { param, validationResult } = require('express-validator');

const {getCategory,getCategoryById, createCategory, updateCategory, deleteCategory } = require('../services/categoryService');

const router = express.Router();

router.route('/api/v1/categories').get(getCategory).post(createCategory);
router.route('/api/v1/categories/:id').get(
    (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
       }},
        getCategoryById).put(updateCategory).delete(deleteCategory);

module.exports = router;