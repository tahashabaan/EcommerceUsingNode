const express = require('express');
const {
      createBrandModal, 
      getBrandModal, 
      getBrandModalById, 
      updataBrandModalById,
      delBrandModalById, 
      uploadBrandIamge,
      filterImageBrand
     } = require('../services/brandService');

const {
     getBrandValidated,
     createBrandValidated 
     } = require('../utilis/validated/brandValidator');     

const router = express.Router();


router.route('/').get(getBrandModal).post(
     // uploadBrandIamge,
     // filterImageBrand,
     );
     
router.route('/:id')
.get(getBrandValidated,   getBrandModalById)
.put(
     uploadBrandIamge,
     filterImageBrand,
     getBrandValidated,   
     updataBrandModalById)
.delete(getBrandValidated, delBrandModalById);

module.exports = router;