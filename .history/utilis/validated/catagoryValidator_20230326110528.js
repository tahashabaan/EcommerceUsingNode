const {check } =require('express-validator');
const validatorMiddlware = require('../../middlewares/validataor');

exports.getcatagoryValidator = [
    check('id').isMongoId().withMessage('catagory not found'),
    validatorMiddlware
]

exports.createcatagoryValidator = [
    check('name').isLength({min:3}).withMessage('catagorymust be  large then 3')
    .isLength({max:32}).withMessage('catagory must be less then 32'),
    validatorMiddlware
] 

exports.updatacatagoryValidator = [
    check('id').isMongoId().withMessage('catagory id not valid'),
    validatorMiddlware
] 
exports.deletecatagoryValidator = [
    check('id').isMongoId().withMessage('catagory id not valid'),
    validatorMiddlware
] 