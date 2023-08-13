const validatorMiddlware = require('../../middlewares/validataor');
const {check } = require('express-validator');

exports.getcatagoryValidator = [
    check('id').isMongoId().withMessage('catagory not found'),
    validatorMiddlware
]

exports.createcatagoryValidator = [
    check('name').i().withMessage('catagory not found'),
    validatorMiddlware
] 