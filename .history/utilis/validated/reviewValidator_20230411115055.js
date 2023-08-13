const slugify = require('slugify');
const { check } = require('express-validator');

const validatorMiddleware = require('../../middlewares/errorMiddleware');
const Rview = require('../../modlas/reviewModal');
const ApiError = require('../apiError');

exports.createReviewValidator = [
    check('title').optional(),
    check('ratings')
    .notEmpty()
    .withMessage('rating is required and 1...5')
    .isFloat({min:1, max:5})
    .withMessage('rating must be num and from 1...5')
    .custom((val, {req}) => {
        Rview.findOne({user:req.body.user, product:req.body.product}).then((review) => {
            if (review) {
                return new Promise.reject('the user add review already')
            }
        })
        }),
    check('user')
    .isMongoId()
    .withMessage('Invalid ID formate'),
    check('product')
    .isMongoId()
    .withMessage('Invalid ID formate')
    
    ,validatorMiddleware   
]

exports.updateReviewValidator = [
    check('id')
    .isMongoId()
    .withMessage('Invalid  ID formate')
    .custom((idVal, {req}) => {
        Rview.findById(idVal)
        }),

    validatorMiddleware 

]
