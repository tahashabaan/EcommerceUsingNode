const {check } =require('express-validator');
const validatorMiddlware = require('../../middlewares/validataor');

exports.getBrandValidated = (req, res, next) => {
    check('id').isMongoId().withMessage('brand id not found');
    next()
}

exports.createBrandValidated = (req, res, next) => {
    check('name').len().withMessage('brand id not found');
    next()
}