const Sets = require('../models/Set')

module.exports = {
    index: (req, res) => {
        Sets.find({})
        .populate({
            path: "cards",
            select: "name number imageUrl",
            options:{
                sort:  "number"
            }
            
        })
        // }"cards", "name number imageUrl", {sort: "number"})
        .then(sets => {
            res.json(sets);
        });
    }
}