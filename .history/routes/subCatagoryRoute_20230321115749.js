const express = require('express');
const{getSubcatacoryServices,createSubcatacoryService} = require('../services/subcatagoryServices')

const router  = express.Router();


router.route('/').get(getSubcatacoryServices).post(createSubcatacoryService);
 

module