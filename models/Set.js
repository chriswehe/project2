const mongoose = require ('../db/connection')



const setsSchema = new mongoose.Schema ({ 
    code: String,
    ptcgoCode: String,
    name: {
        type: String,
        lowercase: true
    },
    series: {
        type: String,
        lowercase: true
    },
    totalCards: Number,
    standardLegal: Boolean,
    expandedLegal: Boolean,
    releaseDate: Date,
    symbolUrl: String,
    logoUrl: String,
    cards: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Card"
    }]
})

const Set = mongoose.model("Set", setsSchema)

module.exports = Set;