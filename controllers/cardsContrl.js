const Cards = require('../models/Card')

module.exports = {
    index: (req, res) => {
        Cards.find({})
        .sort({pokedexNum: "ascending"})
        .populate({
            path: "cards",
            select: "name number imageUrl set"
        })
        .then(cards => {
            res.json(cards);
        });
    },
    showName: (req, res) => {
        Cards.findOne({name: req.params.name})
            .then(card => {
                res.json(card)
            })
    },
    showSet: (req, res) => {
        Cards.find({set: req.params.set})
            .then(cards => {
                res.json(cards)
            })
    },
    showRarity: (req, res) => {
        Cards.find({rarity: req.params.rarity})
            .then(cards => {
                res.json(cards)
            })
    },
    create: (req, res) => {
        Cards.create(req.body)
            .then(card => {
                res.json(card)
            })
    },
    edit: (req, res) => {
        Cards.findOneAndUpdate({name: req.params.name}, req.body)
            .then(card => {
                res.json(card)
            })
    },
    destroy: (req, res) => {
        Cards.deleteMany({name: req.params.name})
          .then(card => res.json(card))
    }
}