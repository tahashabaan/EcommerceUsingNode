const express = require('express');
const {
      createBrandModal, 
      getBrandModal, 
      getBrandModalById, 
      updataBrandModalById,
      delBrandModalById, 
      brandIamge,
      filterImageBrand
     } = require('../services/brandService');

const {
     getBrandValidated,
     createBrandValidated 
     } = require('../utilis/validated/brandValidator');     

const router = express.Router();


router.route('/').get(getBrandModal).post(
     brandIamge,
     filterImageBrand,
     createBrandValidated,
     createBrandModal);
router.route('/:id')
.get(getBrandValidated,   getBrandModalById)
.put(brandIamge,filterImageBrand,getBrandValidated,   updataBrandModalById)
.delete(getBrandValidated, delBrandModalById);

module.exports = router;