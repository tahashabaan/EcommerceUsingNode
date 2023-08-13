const express = require('express');
const {
      createBrandModal, 
      getBrandModal, 
      getBrandModalById, 
      updataBrandModalById,
      delBrandModalById, 
     } = require('../services/brandService');

const router = express.router();


router.route('/').get(getBrandModal).post(createBrandModal);
