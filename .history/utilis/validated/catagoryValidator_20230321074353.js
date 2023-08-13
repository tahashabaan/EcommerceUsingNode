const validatorMiddlware = require('validator-middlware')
const {check, validationResult } = require('express-validator');
exports.getcatagoryValidator = [
    check('id').isMongoId().withMessage('catagory not found'),
    validatorMiddlware
]