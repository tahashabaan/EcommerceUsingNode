const express = require('express');
const {createCuponModal
       getCuponModal
       getCuponModalById
       updataCuponModalById
       delCuponModalById} = require('../services/cuponService')
const authService =  require('../services/authService')

const router = express.Router();
 
router.use(authService.protect, authService.allowTo('mange', 'admin'))
router.route('/')

module.exports = router;


