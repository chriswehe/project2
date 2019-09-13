const Pokemon = require('../models/Pokemon')

module.exports = {
    index: (req, res) => {
        Pokemon.find({})
        .sort({pokedexNum: "ascending"})
        .populate({
            path: "cards",
            select: "name number imageUrl set"
        })
        .then(pokemon => {
            res.json(pokemon);
        });
    },
    showName: (req, res) => {
        Pokemon.find({name: req.params.name})
            .then(pokemon => {
                res.json(pokemon)
            })
    },
    showPokedexNum: (req, res) => {
        Pokemon.find({pokedexNum: req.params.pokedexNum})
            .then(pokemon => {
                res.json(pokemon)
            })
    }
}