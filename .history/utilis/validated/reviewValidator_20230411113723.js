const slugify = require('slugify');
const { check } = require('express-validator');

const validatorMiddleware = require('../../middlewares/errorMiddleware');
const ApiError = require('../apiError');

exports.createReviewValidator = [
    check('title').optional(),
    check('ratings')
    .notEmpty()
    .withMessage('rating is required and 1...5')
    .isFloat({min:1, max:5})
    .withMessage('rating must be num and from 1...5'),
    check('user')
    .isMongoId()
    .withMessage('Invalid ID formate'),
    check('product')
    .isMongoId()
    .withMessage('Invalid ID formate')
    .custom(val, {req} => {
        review
    })
    ,validatorMiddleware   
]
