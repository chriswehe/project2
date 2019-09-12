const express = require('express');
const router = express.Router();
const cardsContrl = require('../controllers/cardsContrl');

router.get('/', cardsContrl.index)

module.exports = router;
