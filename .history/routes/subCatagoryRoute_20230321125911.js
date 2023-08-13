const express = require('express');
const{getSubcatacoryServices, createSubcatacoryService, getSubcatacoryServiceById, updataSubcatacoryServiceById} = require('../services/subcatagoryServices')
const{getSubcatagoryValidator, createSubcatagoryValidator} = require('../utilis/validated/subCatagoryValidator')

const router  = express.Router();

router.route('/')
.get( getSubcatacoryServices)
.post(createSubcatagoryValidator, createSubcatacoryService)

router.route('/:id')
.get( getSubcatacoryServiceById)
.post(updataSubcatacoryServiceById, deleteSubcatacoryService)

module.exports = router;