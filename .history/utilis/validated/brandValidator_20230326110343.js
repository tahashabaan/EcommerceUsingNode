const {check } =require('express-validator');
const validatorMiddlware = require('../../middlewares/validataor');

exports.getBrandValidated = (req, res, next) => {
    check('id')
    next()
}