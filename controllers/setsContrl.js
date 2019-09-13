const Sets = require('../models/Set')

module.exports = {
    index: (req, res) => {
        Sets.find({})
        .sort({releaseDate: "ascending"})
        .populate({
            path: "cards",
            select: "name number imageUrl set",
            options:{
                sort:  "number"
            }
        })
        // }"cards", "name number imageUrl", {sort: "number"})
        .then(sets => {
            res.json(sets);
        });
    },
    showName: (req, res) => {
        Sets.find({name: req.params.name})
            .then(set => {
                res.json(set)
            })
    }
}