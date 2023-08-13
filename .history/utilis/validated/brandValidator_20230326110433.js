const {check } =require('express-validator');
const validatorMiddlware = require('../../middlewares/validataor');

exports.getBrandValidated = (req, res, next) => {
    check('id').isMongoId().withMessage('brand id not found');
    next()
}

exports.creaBrandValidated = (req, res, next) => {
    check('id').isMongoId().withMessage('brand id not found');
    next()
}