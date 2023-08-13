const express = require('express');
import {createBrandModal, getBrandModal} = require('../services/brandService')

const router = express.router();


router.route('/').get().post()