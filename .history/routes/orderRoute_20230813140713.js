const express = require('express');
const {createCashOrder} = require('../services/orderService')

const authService =  require('../services/authService')

const router = express.Router();
 
// router.use(authService.protect, authService.allowTo('mange', 'admin'))
router.route('/')
.get(getCuponModal)
.post(createCashOrder)

// cash , card, admin show all iorders, user can gweorder b
// checckouseession
// webhooks creaordere  s
// router.route('/:id')
// .get(getCuponModalById)
// .put(updataCuponModalById)
// .delete(delCuponModalById)

module.exports = router;