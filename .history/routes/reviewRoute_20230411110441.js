const express = require('express');

//auth
const authService = require('../services/authService')
// valdiator


// business logic
const {
    createReview,
    getReviews,
    getReviewById,
    updateReview,
    delReview  }= require('../services/reviewsService');


const router = express.Router();

router.route('/')
.get(getReviews)
.post(
    authService.protect,
    authService.allowTo('user'),
    createReview)


router.route('/:id')
.get(getReviewById)
.put(
    authService.protect,
    authService.allowTo('user'),
    updateReview )
.delete(
    authService.protect,
    authService.allowTo('user','mange','admin')
    ,delReview)






module.exports = router;

