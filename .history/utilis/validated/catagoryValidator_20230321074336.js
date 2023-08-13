const {check, validationResult } = require('express-validator');
co
exports.getcatagoryValidator = [
    check('id').isMongoId().withMessage('catagory not found'),
    validatorMiddlware
]