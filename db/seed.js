const pokeCardB1JsonData = require('./data/base1Cards.json');
const pokeCardB2JsonData = require('./data/base2Cards.json');
const pokeCardB3JsonData = require('./data/base3Cards.json');
const pokeCardB4JsonData = require('./data/base4Cards.json');
const pokeCardB5JsonData = require('./data/base5Cards.json');

const Cards = require('../models/Card');

const setsJsonData = require('./data/sets.json')
const Sets = require('../models/Set');

const generationJsonData = require('./data/generations.json')
const Generations = require('../models/Generation');

Sets.deleteMany({}).then(() => {
    Sets.create(setsJsonData).then((sets) => {
        console.log(sets)
    }).catch(err => console.log(err))
}).catch(err => console.log(err))



Cards.deleteMany({}).then(() => {
    Cards.create(pokeCardB1JsonData).then((cards) => {
        console.log(cards)
    }).catch(err => console.log(err))
    Cards.create(pokeCardB2JsonData).then((cards) => {
        console.log(cards)
    }).catch(err => console.log(err))
    Cards.create(pokeCardB3JsonData).then((cards) => {
        console.log(cards)
    }).catch(err => console.log(err))
    Cards.create(pokeCardB4JsonData).then((cards) => {
        console.log(cards)
    }).catch(err => console.log(err))
    Cards.create(pokeCardB5JsonData).then((cards) => {
        console.log(cards)
    }).catch(err => console.log(err))
}).catch(err => console.log(err))

Generations.deleteMany({}).then(() => {
    Generations.create(generationJsonData).then((generations) => {
        console.log(generations)
    }).catch(err => console.log(err))
}).catch(err => console.log(err))