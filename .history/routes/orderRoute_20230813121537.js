const express = require('express');
const {createCashOrder} = require('../services/orderService')

const authService =  require('../services/authService')

const router = express.Router();
 
router.use(authService.protect, authService.allowTo('mange', 'admin'))
router.route('/cashP')
.get(getCuponModal)
.post(createCashOrder)


// router.route('/:id')
// .get(getCuponModalById)
// .put(updataCuponModalById)
// .delete(delCuponModalById)

module.exports = router;