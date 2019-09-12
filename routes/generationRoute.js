const express = require('express');
const router = express.Router();
const generationsContrl = require('../controllers/generationsContrl');

router.get('/', generationsContrl.index)

module.exports = router;
