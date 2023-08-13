const express = require('express');

//auth
const authService = require('../services/authService')
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


const router = express.Router();







module.exports = router;

