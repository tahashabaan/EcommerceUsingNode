const express = require('express');

// valdiator



// business logic
const {
    createProduct,
    getProduct, 
    getProductByID,
    updataProductByID, 
    deleteProductByID,
    uploadProductImages,
    filterProductImages  }=require('../services/productService');

    const authService = require('../services/authService')

const router = express.Router();







module.exports = router;

