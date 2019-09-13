const express = require('express');
const router = express.Router();
const generationsContrl = require('../controllers/generationsContrl');

router.get('/', generationsContrl.index)
router.get('/name/:name', generationsContrl.showName)

module.exports = router;
