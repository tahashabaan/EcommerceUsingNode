const express = require('express');
const {
      createBrandModal, 
      getBrandModal, 
      getBrandModalById, 
      updataBrandModalById,
      delBrandModalById, 
     } = require('../services/brandService');

const {
     getBrandValidated 
     } = require('../utilis/validated/brandValidator');     

const router = express.router();


router.route('/').get(getBrandModal).post(createBrandModal);
router.route('/:id').get(getBrandModalById).put(updataBrandModalById).delte(delBrandModalById)