const {check } =require('express-validator');
const validatorMiddlware = require('../../middlewares/validataor');

exports.getBrandValidated =[ 
    check('id').isMongoId().withMessage('brand id not found');
    validatorMiddlware
]

exports.createBrandValidated = [(req, res, next) => {]
    check('name')
    .isLength({min:3}).withMessage('brand must be  large then 3')
    .isLength({max:3}).withMessage('brand  must be less then 32')
]