const {check } =require('express-validator');
const validatorMiddlware = require('../../middlewares/validataor');

exports.getBrandValidated = (req, res, next) => {
    check('id').isMongoId().withMessage('brand id not found');
    next()
}

exports.createBrandValidated = (req, res, next) => {
    check('name').length({min:3}).withMessage('brand id not found');
    next()
}