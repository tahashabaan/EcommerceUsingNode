const express = require('express');
const {
    createProduct,
    getProduct, 
    getProductByID,
    updataProductByID, 
    deleteProductByID  }=require('../services/productService');

  const router = express.R();

  router.route('/').get(getProduct).post(createProduct);
  router.route('/:id').get(getProductByID).put(updataProductByID).delete(deleteProductByID);