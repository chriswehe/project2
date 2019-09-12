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
    logoUrl: String,
    cards: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Card"
    }]
})

const Set = mongoose.model("Set", setsSchema)

module.exports = Set;