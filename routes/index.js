const express = require('express');
const router = express.Router();

router.use('/pokeapi/cards', require('./cardRoute'));
router.use('/pokeapi/generations', require('./generationRoute'));
router.use('/pokeapi/sets', require('./setRoute'));
router.use('/pokeapi/pokemon', require('./pokemonRoute'));

router.all('*', (req, res) => {
    res.status(400).send();
});

module.exports = router;