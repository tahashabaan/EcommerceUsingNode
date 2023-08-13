const express = require('express');

const {addAdressToUser} = require('../services/addressService')

const router = express.Router();

router.route('/')
.get()
.post()
.delete()
.put()

module.exports = router;