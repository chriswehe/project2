const mongoose = require ('../db/connection')

const setsSchema = new mongoose.Schema ({ 
    code: String,
    ptcgoCode: String,
    name: String,
    series: String,
    totalCards: Number,
    standardLegal: Boolean,
    expandedLegal: Boolean,
    releaseDate: String,
    symbolUrl: String,
    logoUrl: String
})

const Sets = mongoose.model("Sets", setsSchema)

module.exports = Sets;