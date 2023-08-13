const express = require('express');
const {
      createUser,
      getUsers,
      getUserById,
      updataUserById,
      changePasswordById,
      delUserById,
      
      filterImageUser
     } = require('../services/userService');

const {
     getUserValidator,
     createUserValidator,
     updateUserValidator ,
     deleteUserValidator,
     ,
     
     } = require('../utilis/validated/userValidator');     
     
const router = express.Router();


router.route('/').get(getUsers).post(
     uploadUserIamgee,
     filterImageUser,
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