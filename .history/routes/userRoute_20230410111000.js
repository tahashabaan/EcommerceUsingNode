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

     authService.protect,
     authService.allowTo('mange', 'admin'),
const router = express.Router();

router.route('/')
.get(getUsers)
.post(
     uploadUserIamge,
     filterImageUser,
     createUserValidator,
     createUser,
     );
router.route('/:id')
.get(getUserValidator, getUserById)
.put(
     uploadUserIamge,
     filterImageUser,
     updateUserValidator,
     updataUserById)     
.delete(deleteUserValidator, delUserById);

router.route('changePassword/:id').put(changePasswordById)

module.exports = router;