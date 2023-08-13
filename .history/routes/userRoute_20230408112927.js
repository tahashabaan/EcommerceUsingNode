const express = require('express');
const {
      createUser,
      getUsers,
      getUserByI
     } = require('../services/userService');

const {
     getBrandValidated,
     createBrandValidated 
     } = require('../utilis/validated/brandValidator');     

const router = express.Router();


router.route('/').get(getBrandModal).post(
     uploadBrandIamge,
     filterImageBrand,
     createBrandValidated,
     createBrandModal);
router.route('/:id')
.get(getBrandValidated,   getBrandModalById)
.put(
     uploadBrandIamge,
     filterImageBrand,
     getBrandValidated,   
     updataBrandModalById)
.delete(getBrandValidated, delBrandModalById);

module.exports = router;