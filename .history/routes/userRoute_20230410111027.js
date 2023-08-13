const express = require('express');
const {
      createUser,
      getUsers,
      getUserById,
      updataUserById,
      changePasswordById,
      delUserById,
      uploadUserIamge,
      filterImageUser } = require('../services/userService');

const {
     getUserValidator,
     createUserValidator,
     updateUserValidator ,
     deleteUserValidator  } = require('../utilis/validated/userValidator');  

const authService = require('../services/authService')

     
const router = express.Router();

router.route('/')
.get(
     authService.protect,
     authService.allowTo('mange', 'admin'),
     getUsers)
.post(
     authService.protect,
     authService.allowTo('mange', 'admin'),
     uploadUserIamge,
     filterImageUser,
     createUserValidator,
     createUser,
     );
router.route('/:id')
.get(
     authService.protect,
     authService.allowTo('mange', 'admin'),
     getUserValidator, 
     getUserById)
.put(
     uploadUserIamge,
     filterImageUser,
     updateUserValidator,
     updataUserById)     
.delete(deleteUserValidator, delUserById);

router.route('changePassword/:id').put(changePasswordById)

module.exports = router;