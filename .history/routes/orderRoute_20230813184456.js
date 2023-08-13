const express = require('express');
const {createCashOrder, } = require('../services/orderService')

const authService =  require('../services/authService')

const router = express.Router();
 
router.use(authService.protect)

router.route('/')
.get(getCuponModal)
.post(createCashOrder)

router.get(
  '/checkout-session/:cartId',
  authService.allowedTo('user'),
  checkoutSession
);

// cash , card, admin show all iorders, user can gweorder b
// checckouseession
// webhooks creaordere  sripe acoun
// router.route('/:id')
// .get(getCuponModalById)
// .put(updataCuponModalById)
// .delete(delCuponModalById)

module.exports = router;