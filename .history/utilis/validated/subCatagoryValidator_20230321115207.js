const {check } =require('express-validator');
const validatorMiddlware = require('../../middlewares/validataor');


exports.getsubcatagoryValidator=[check('id').isMongoId().withMessage('id not field'), validatorMiddlware]

exports.createSubcatagoryValidator=[check('id').isMongoId().withMessage('id not field'), validatorMiddlware]

