const {check, validationResult } = require('express-validator');

exports.getcatagoryValidator = [check('id').isMongoId]