const slugify = require('slugify');
const { check } = require('express-validator');

const validatorMiddleware = require('../../middlewares/errorMiddleware');
const ApiError = require('../apiError');

exports.createReviewValidator = [
    check('id').isMongoId()
    .notEmpty()
    .withMessage('rating is required 1...5'),
    check('title').optional(),
    check('ratings')
    .notEmpty()
    .withMessage('rating is required 1...5')
    .isNumeric()
    .withMessage('rating must be num and from 1...5')
    .if((!(value>=1 &&value<=5)) =>  next(new ApiError('')))
    ,validatorMiddleware   
]
