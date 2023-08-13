const express = require('express');
const {
      createUser,
      getUsers,
      getUserById,
      updataUserById,
      changePasswordById,
      delUserById,
      uploadUserIamge,
      filterImageUser
     } = require('../services/userService');

const {
     getUserValidator,
     createUserValidator,
     updateUserValidator ,
     deleteUserValidator,
   
     } = require('../utilis/validated/userValidator');     
     
const router = express.Router();

router.route('/')
.get(getUsers)
.post(
     uploadUserIamgee,
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
router.route('changePassword/:id')

module.exports = router;