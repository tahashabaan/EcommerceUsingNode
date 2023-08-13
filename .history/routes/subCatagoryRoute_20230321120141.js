const express = require('express');
const{getSubcatacoryServices,createSubcatacoryService} = require('../services/subcatagoryServices')
const{getSubcatagoryValidator,createSubcatagoryValidator} = require('../utilis/validated/subCatagoryValidator')

const router  = express.Router();


router.route('/').get(getSubcatacoryValidator, getSubcatacoryServices).post(createSubcatagoryValidator,createSubcatacoryService);
 

module.exports = router;