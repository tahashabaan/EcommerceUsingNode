const express = require('express');
const {
    createProduct,
    getProduct, 
    getProductByID,
    updataProductByID, 
    deleteProductByID  }=require('../services/productService');

  const router = express.R