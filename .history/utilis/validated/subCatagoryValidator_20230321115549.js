const {check } =require('express-validator');
const validatorMiddlware = require('../../middlewares/validataor');


exports.getSubcatagoryValidator=[check('id').isMongoId().withMessage('id not field'), validatorMiddlware]

exports.createSubcatagoryValidator=[check('name').isLength({min:3}).withMessage('the subcatagory Name is must be large 3 character').isLength({min:3}).withMessage('the subcatagory Name is must be large 3 character'), validatorMiddlware]

