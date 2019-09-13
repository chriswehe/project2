const express = require('express');
const router = express.Router();
const pokemonContrl = require('../controllers/pokemonContrl');

router.get('/', pokemonContrl.index)
router.get('/name/:name', pokemonContrl.showName)
router.get('/pokedex/:pokedexNum', pokemonContrl.showPokedexNum)


module.exports = router;