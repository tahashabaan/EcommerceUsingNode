const express = require('express');
const{getSubcatacoryServices,createSubcatacoryService} = require('../services/subcatagoryServices')
const{getSubcatacoryServices,createSubcatacoryService} = require('../uti/subcatagoryServices')
const router  = express.Router();


router.route('/').get(getSubcatacoryServices).post(createSubcatagoryValidator,createSubcatacoryService);
 

module.exports = router;