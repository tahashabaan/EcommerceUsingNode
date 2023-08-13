const express = require('express');

//auth
const authService = require('../services/authService')
// valdiator



// business logic
const {
    createReview,
    getReviewa  }=require('../services/reviewsService');


const router = express.Router();







module.exports = router;

