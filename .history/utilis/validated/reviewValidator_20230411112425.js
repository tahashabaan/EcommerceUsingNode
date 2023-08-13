const slugify = require('slugify');
const { check } = require('express-validator');

const validatorMiddleware = require('../../middlewares/errorMiddleware');
const apiError = require('../apiError');

exports.createReviewValidator = [
    check('title').optional(),
    check('ratings')
    .notEmpty()
    .withMessage('rating is required 1...5')
    .isNumeric()
    .withMessage('rating must be num')
    .if((!(value>=1 &&value<=5)) =>  next(new apiError()))
    ,validatorMiddleware   
]
