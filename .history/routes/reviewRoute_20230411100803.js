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






module.exports = router;

