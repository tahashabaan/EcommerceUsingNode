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
      }=require('../services/reviewsService');


const router = express.Router();







module.exports = router;

