const express = require('express');

const {
  createProductValidator,
  getProductValidator,
  updateProductValidator
    }=require('../utilis/validated/productValidator');

const {
    createProduct,
    getProduct, 
    getProductByID,
    updataProductByID, 
    deleteProductByID  }=require('../services/productService');

  const router = express.Router();

  router.route('/').get(getProduct).post(createProduct);
  router.route('/:id').get(getProductByID).put(updataProductByID).delete(deleteProductByID);

  module.exports = router;