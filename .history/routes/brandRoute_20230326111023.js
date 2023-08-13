const express = require('express');
const {
      createBrandModal, 
      getBrandModal, 
      getBrandModalById, 
      updataBrandModalById,
      delBrandModalById, 
     } = require('../services/brandService');

const {
     getBrandValidated,
     createBrandValidated 
     } = require('../utilis/validated/brandValidator');     

const router = express.router();


router.route('/').get(getBrandModal).post(createBrandValidated,createBrandModal);
router.route('/:id')
.get(getBrandValidated,getBrandModalById)
.put(getBrandValidated,updataBrandModalById)
.delte(getBrandValidated,delBrandModalById)