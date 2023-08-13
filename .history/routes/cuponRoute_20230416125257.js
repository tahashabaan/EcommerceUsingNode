const express = require('express');
const {createCuponModal,
       getCuponModal,
       getCuponModalById,
       updataCuponModalById,
       delCuponModalById} = require('../services/couponService')

const authService =  require('../services/authService')

const router = express.Router();
 
router.use(authService.protect, authService.allowTo('mange', 'admin'))
router.route('/')
.get(getCuponModal)
.post(createCuponModal)

router.route('/:id')
.get(getCuponModal)
.post(createCuponModal)

module.exports = router;


