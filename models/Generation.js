const mongoose = require ('../db/connection')
const Schema = mongoose.Schema;

const nameURLSchema = new Schema({
    name: String,
    url: String
})

const generationSchema = new Schema({ 
    name: String,
    id: Number,
    moves: [nameURLSchema],
    pokemon_species: [nameURLSchema],
    types: [nameURLSchema],
    version_groups: [nameURLSchema]
})

const Generation = mongoose.model("Generation", generationSchema)

module.exports = Generation;