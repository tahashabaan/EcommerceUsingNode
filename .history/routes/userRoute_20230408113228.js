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
     createUserValidator,
     updateUserValidator ,
     deleteUserValidator
     } = require('../utilis/validated/userValidator');     
     uploadUserIamge
const router = express.Router();


router.route('/').get(getUsers).post(
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