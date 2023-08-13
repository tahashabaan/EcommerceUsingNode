const express = require('express');
const {createBrandModal, getBrandModal, getBrandModalById, del} = require('../services/brandService')

const router = express.router();


router.route('/').get().post()