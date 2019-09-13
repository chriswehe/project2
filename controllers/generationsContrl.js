const Generations = require('../models/Generation')

module.exports = {
    index: (req, res) => {
        Generations.find({}).then(generations => {
            res.json(generations);
        });
    },
    showName: (req, res) => {
        Generations.find({name: req.params.name})
            .then(generation => {
                res.json(generation)
            })
    }
}