const Generations = require('../models/Generation')

module.exports = {
    index: (req, res) => {
        Generations.find({}).then(generations => {
            res.json(generations);
        });
    }
}