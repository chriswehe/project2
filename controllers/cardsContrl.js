const Cards = require('../models/Card')

module.exports = {
    index: (req, res) => {
        Cards.find({}).then(cards => {
            res.json(cards);
        });
    }
}