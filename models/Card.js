const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const attacksSchema = new Schema ({
    cost: [],
    name: String,
    text: String,
    damage: String,
    convertedEnergyCost: Number
})

const weaknessesSchema = new Schema({
    type: String,
    value: String
})

const PokemonCardSchema = new Schema (
    {
    id: String,
    name: String,
    nationalPokedexNumber: Number,
    imageUrl: String,
    imageUrlHiRes: String,
    types: [],
    supertype: String,
    subtype: String,
    evolvesFrom: String,
    hp: String,
    retreatCost: [],
    number: String,
    artist: String,
    rarity: String,
    series: String,
    set: String,
    setCode: String,
    attacks: [attacksSchema],
    weaknesses: [weaknessesSchema]
      },  
);

const PokemonCards = mongoose.model("PokemonCards", PokemonCardSchema)

module.exports = PokemonCards;