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
    deleteProductByID,
    uploadProductImages,
    filterProductImages,
    addWishList  }=require('../services/productService');

    const authService = require('../services/authService')
    const reviewRoute = require('./reviewRoute')
    
   const router = express.Router();

  router.route('/').get(getProduct)
  .post(
    authService.protect,
    authService.allowTo('mange', 'admin'),
    uploadProductImages,
    filterProductImages,
    createProductValidator,
    createProduct);
  router.route('/:id')
  .get(getProductValidator,  getProductByID)
  .put(
    authService.protect,
    authService.allowTo('mange', 'admin'),
    uploadProductImages,
    filterProductImages,
    updateProductValidator, 
    updataProductByID)
  .delete(
    authService.protect,
    authService.allowTo('admin'),
    deleteProductValidator, 
    deleteProductByID);

   router.use('/:productId/reviews', reviewRoute);


  module.exports = router;