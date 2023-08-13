const express = require('express');

//auth
const authService = require('../services/authService')
// valdiator
const {
    createReviewValidator,
    updateReviewValidator,
    delReviewValidator
      }= require('../utilis/validated/reviewValidator');

// business logic
const {
    createReview,
    getReviews,
    getReviewById,
    updateReview,
    delReview  }= require('../services/reviewsService');


const router = express.Router({mergeParams:});

router.route('/')
.get(getReviews)
.post(
    authService.protect,
    authService.allowTo('user'),
    createReviewValidator,
    createReview)


router.route('/:id')
.get(getReviewById)
.put(
    authService.protect,
    authService.allowTo('user'),
    updateReviewValidator,
    updateReview )
.delete(
    authService.protect,
    authService.allowTo('user','mange','admin'),
    delReviewValidator,
    delReview)






module.exports = router;

