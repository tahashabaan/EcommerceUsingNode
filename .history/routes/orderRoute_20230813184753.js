const express = require('express');
const {createCashOrder,checkoutSession,  filterOrderForLoggedUser,findAllOrders,findOneOrder, updateOrderToPaid, createCardOrder, updateOrderToDelivered } = require('../services/orderService')

const authService =  require('../services/authService')

const router = express.Router();
 
router.use(authService.protect)



router.get(
  '/checkout-session/:cartId',
  authService.allowTo('user'),
  checkoutSession
);

router.route('/:cartId').post(authService.allowedTo('user'), createCashOrder);

router.get(
  '/',
  authService.allowedTo('user', 'admin', 'manager'),
  filterOrderForLoggedUser,
  findAllOrders
);





// cash , card, admin show all iorders, user can gweorder b
// checckouseession
// webhooks creaordere  sripe acoun
// router.route('/:id')
// .get(getCuponModalById)
// .put(updataCuponModalById)
// .delete(delCuponModalById)

module.exports = router;