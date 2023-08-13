const validatorMiddlware = require('../../middlewares/validataor');
const {check } = require('express-validator');

exports.getcatagoryValidator = [
    check('id').isMongoId().withMessage('catagory not found'),
    validatorMiddlware
]

exports.createcatagoryValidator = [
    check('name').isLength({min:3}).withMessage('catagoryName must then large 3')
    .isLength({max:32}).withMessage('catagoryName must then less then 3'),
    validatorMiddlware
] 