/* eslint-disable no-lonely-if */
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
    .custom(async (idVal, {req}) => {
       const reviewUser = await Rview.findById(idVal);
       //check user found or not
       if (!reviewUser) 
          return new Promise.reject('not can find User and Not can update review')
       //check  the smama user create review
          if(reviewUser.user.toString() !== req.user._id.toString()) 
             return new Promise.reject('not allowed perform this product')
        })

        , 

    validatorMiddleware 

]

exports.updateReviewValidator = [
    check('id')
    .isMongoId()
    .withMessage('Invalid  ID formate')
    .custom(async (idVal, {req}) => {
       const reviewUser = await Rview.findById(idVal);

       if (!reviewUser) 
          return new Promise.reject('not can find User and Not can delete review')
       //check user found or not
       if (reviewUser.role !=='user') 
            return await Rview.deleteOne({_id:idVal});

        else  
          // eslint-disable-next-line no-else-return
          {
            if(reviewUser.user.toString() !== req.user._id.toString()) 
            return new Promise.reject('not allowed delete this product')
              
            else 
            }
 
        }), 

    validatorMiddleware 

]
