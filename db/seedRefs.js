const Card = require('../models/Card');
const Set = require('../models/Set');
const Generation = require('../models/Generation');



// Card.find({}).then(cardsDB => {
//     cardsDB.forEach(cardDocument => {
//         Set.findOne({name: cardDocument.set}).then(setDocument => {
//             setDocument.cards.push(cardDocument.id);
//             setDocument.save();
//         }).catch(err => console.log(err));
//     });
// });

// Card.find({}).then(cardsDB => {
//     cardsDB.forEach(cardsDocument => {
//         if(cardsDocument.supertype === "Pokémon"){
//             Generation.findOne({pokemon_species.name: cardsDocument.name})
//             .then(pokeSpeciesDoc => {
//                 pokeSpeciesDoc.cards.push(cardsDocument.id);
//                 pokeSpeciesDoc.save();
//             }).catch(err => console.log(err))
//         }
//     });
// });

Generation.find({}).then(generationsDB => {
    generationsDB.forEach(generationDocument => {
        generationDocument.pokemon_species.forEach(pokemonSpeciesDoc => {
            Card.findOne({name: pokemonSpeciesDoc.name}).then(cardDoc => {
                // console.log(pokemonSpeciesDoc.name);
                if (cardDoc){
                    // pokemonSpeciesDoc.cards= cardDoc.id;
                    console.log(cardDoc.name)
                    console.log(pokemonSpeciesDoc.name)
                    console.log(cardDoc.id)
                    pokemonSpeciesDoc.cards.push(cardDoc.id);
                    // generationDocument.save();
                    pokemonSpeciesDoc.save();
                }
            })
            // .then(() => generationDocument.save())
            .catch(err => console.log(err))
        })
    })
})

