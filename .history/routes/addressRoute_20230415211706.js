const express = require('express');

const {addAdressToUser} = require('../services/addressService')
const authService = require('../services/authService')
const router = express.Router();

router.route('/')
.get()
.post()
.delete()
.put()

module.exports = router;