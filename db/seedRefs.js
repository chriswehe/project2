const pokeCardB1JsonData = require('./data/base1Cards.json');
const pokeCardB2JsonData = require('./data/base2Cards.json');
const pokeCardB3JsonData = require('./data/base3Cards.json');
const pokeCardB4JsonData = require('./data/base4Cards.json');
const pokeCardB5JsonData = require('./data/base5Cards.json');

const Card = require('../models/Card');

const setsJsonData = require('./data/sets.json')
const Set = require('../models/Set');

const generationJsonData = require('./data/generations.json')
const Generation = require('../models/Generation');



Card.find({}).then(cardsDB => {
    cardsDB.forEach(cardsDocument => {
        Set.findOneAndUpdate({name: cardsDocument.set},)

        Set.findOne({name: cardsDocument.set}).then(setDocument => {
            // console.log("set name: " + setDocument);
            // console.log("card's set: " +cardsDocument);
            // console.log(cardsDocument.id)
            setDocument.cards.push(cardsDocument.id);
            console.log(setDocument)
            setDocument.save();
        }).catch(err => console.log(err));
    });
});