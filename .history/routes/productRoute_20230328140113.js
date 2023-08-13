const express = require('express');

const {
  createProductValidator,
  getProductValidator,
  updateProductValidator,
  deleteProductValidator
    }=require('../utilis/validated/productValidator');

const {
    createProduct,
    getProduct, 
    getProductByID,
    updataProductByID, 
    deleteProductByID  }=require('../services/productService');

  const router = express.Router();

  router.route('/').get(getProduct).post(createProductValidator,createProduct);
  router.route('/:id')
  .get(getProductValidator,getProductByID)
  .put(updateProductValidator, updataProductByID)
  .delete(deleteProductByID);

  module.exports = router;