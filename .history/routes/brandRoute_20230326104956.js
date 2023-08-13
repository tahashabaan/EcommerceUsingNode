const express = require('express');
const {createBrandModal, getBrandModal, get} = require('../services/brandService')

const router = express.router();


router.route('/').get().post()