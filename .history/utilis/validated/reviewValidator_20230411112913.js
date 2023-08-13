const slugify = require('slugify');
const { check } = require('express-validator');

const validatorMiddleware = require('../../middlewares/errorMiddleware');
const ApiError = require('../apiError');

exports.createReviewValidator = [
    check('id')
    .isMongoId()
    .withMessage('Invalid ID formate'),
    check('title').optional(),
    check('ratings')
    .notEmpty()
    .withMessage('rating is required 1...5')
    .isFloat({min:})
    .withMessage('rating must be num and from 1...5')
    ,validatorMiddleware   
]
