const Card = require('../models/Card');
const Set = require('../models/Set');
const Generation = require('../models/Generation');
const Pokemon = require('../models/Pokemon');

Card.find({}).then(cardsDB => {
    cardsDB.forEach(cardDocument => {
        Set.findOne({name: cardDocument.set}).then(setDocument => {
            setDocument.cards.push(cardDocument.id);
            setDocument.save();
        }).catch(err => console.log(err));
    });
});

Pokemon.find({}).then(pokeDB => {
    pokeDB.forEach(pokeDoc => {
        Card.findOne({name: pokeDoc.name}).then(cardDoc => {
            if(cardDoc) {
                pokeDoc.cards.push(cardDoc.id)
                pokeDoc.save();
            }
        }).catch(err => console.log(err));
    })
})

