const express = require('express');
const {
      createUser,
      getUsers,
      getUserById,
      updataUserById,
      changePasswordById,
      delUserById
     } = require('../services/userService');

const {
     getUserValidator,
     crea 
     } = require('../utilis/validated/userValidator');     

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