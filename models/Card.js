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
    name: {
        type: String,
        lowercase: true
    },
    nationalPokedexNumber: Number,
    imageUrl: String,
    imageUrlHiRes: String,
    types: [],
    supertype: String,
    subtype: String,
    evolvesFrom: String,
    hp: String,
    retreatCost: [],
    number: Number,
    artist: String,
    rarity: String,
    series: String,
    set: String,
    setCode: String,
    attacks: [attacksSchema],
    weaknesses: [weaknessesSchema]
      },  
);

const Card = mongoose.model("Card", PokemonCardSchema)

module.exports = Card;