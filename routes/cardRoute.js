const express = require('express');
const router = express.Router();
const cardsContrl = require('../controllers/cardsContrl');

router.get('/', cardsContrl.index)
router.get('/name/:name', cardsContrl.showName)
router.get('/set/:set', cardsContrl.showSet)
router.get('/rarity/:rarity', cardsContrl.showRarity)
router.post('/', cardsContrl.create)
router.put('/:name', cardsContrl.edit)
router.delete('/:name', cardsContrl.destroy)
//this delete removes all of the cards by a name
//there frequently are multiple cards with the same name.



module.exports = router;
