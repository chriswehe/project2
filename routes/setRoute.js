const express = require('express');
const router = express.Router();
const setsContrl = require('../controllers/setsContrl');

router.get('/', setsContrl.index)
router.get('/name/:name', setsContrl.showName)


module.exports = router;
