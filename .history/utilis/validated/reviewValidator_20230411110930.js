const slugify = require('slugify');
const { check } = require('express-validator');

const validatorMiddleware = require('../../middlewares/errorMiddleware');

exports.createReviewValidator = [
    check('title').optional(),
    check('ratings').notEmp
    ,validatorMiddleware   
]
