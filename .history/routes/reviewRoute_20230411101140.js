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
    delReview  }=require('../services/reviewsService');


const router = express.Router();

router.route('/')
.get(getReviews)
.post(
    authService.protect,
    createReview )

    
router.route('/:id')
.get(getReviewById)
.put(authService.protect, updateReview )
.delete(authService.protect, delReview)






module.exports = router;

