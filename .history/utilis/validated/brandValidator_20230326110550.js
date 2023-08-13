const {check } =require('express-validator');
const validatorMiddlware = require('../../middlewares/validataor');

exports.getBrandValidated = (req, res, next) => {
    check('id').isMongoId().withMessage('brand id not found');
    next()
}

exports.createBrandValidated = (req, res, next) => {
    check('name').isLength({min:3}).withMessage('brand must be  large then 3')
    next()
}