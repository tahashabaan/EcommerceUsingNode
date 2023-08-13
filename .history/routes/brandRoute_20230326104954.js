const express = require('express');
const {createBrandModal, getBrandModal, ge} = require('../services/brandService')

const router = express.router();


router.route('/').get().post()