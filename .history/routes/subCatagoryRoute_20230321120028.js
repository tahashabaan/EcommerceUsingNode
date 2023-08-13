const express = require('express');
const{getSubcatacoryServices,createSubcatacoryService} = require('../services/subcatagoryServices')
const{getSubcatacoryServices,createSubcatacoryService} = require('../u/subcatagoryServices')
const router  = express.Router();


router.route('/').get(getSubcatacoryServices).post(createSubcatagoryValidator,createSubcatacoryService);
 

module.exports = router;