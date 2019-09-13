const mongoose = require ('../db/connection')



const pokemonSchema = new mongoose.Schema ({ 
    name: String,
    url: String,
    pokedexNum: Number,
    cards: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Card"
    }]
})

const Pokemon = mongoose.model("Pokemon", pokemonSchema)

module.exports = Pokemon;