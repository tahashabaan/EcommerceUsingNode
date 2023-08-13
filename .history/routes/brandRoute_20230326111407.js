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

const router = express.Rou();


router.route('/').get(getBrandModal).post(createBrandValidated,createBrandModal);
router.route('/:id')
.get(getBrandValidated,   getBrandModalById)
.put(getBrandValidated,   updataBrandModalById)
.delte(getBrandValidated, delBrandModalById);

module.exports = router;