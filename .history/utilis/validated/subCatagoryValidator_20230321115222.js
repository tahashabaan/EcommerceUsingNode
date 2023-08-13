const {check } =require('express-validator');
const validatorMiddlware = require('../../middlewares/validataor');


exports.getSubcatagoryValidator=[check('id').isMongoId().withMessage('id not field'), validatorMiddlware]

exports.createSubcatagoryValidator=[check('name').is.withMessage('id not field'), validatorMiddlware]

