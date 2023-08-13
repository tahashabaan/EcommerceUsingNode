const express = require('express');

const {addAdressToUser} = require('../services/addressServ')

const router = express.Router();

router.route('/')
.get()
.post()
.delete()
.put()

module.exports = router;