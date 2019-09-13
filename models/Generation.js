const mongoose = require ('../db/connection')
const Schema = mongoose.Schema;

const nameURLSchema = new Schema({
    name: String,
    url: String
})

const speciesSchema = new Schema({
    name: {
        type: String,
        lowercase: true
    },
    url: String,
    cards: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Card"
    }]
})



const generationSchema = new Schema({ 
    name: String,
    id: Number,
    moves: [nameURLSchema],
    pokemon_species: [speciesSchema],
    types: [nameURLSchema],
    version_groups: [nameURLSchema]
})

const Generation = mongoose.model("Generation", generationSchema)

module.exports = Generation;