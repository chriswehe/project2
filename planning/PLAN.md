#Pokemon Card Pokedex 

##Project Idea
For my project I would like to build an API for pokemon cards. This API will have three collections of data built with three different models. The models will be for Pokemon cards, Pokemon card sets, and Pokemon card Types. 

The API that I will be drawing from is:
https://pokemontcg.io/

The reason I am using this API is because it has links to high quality pokemon card images and I wanted to use this API to modify my Pokedex lab at a later date for fun.

###Pokemon Card Model

`const attacksSchema = new Schema ({
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

const PokemonCard = new Schema (
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
);`


###Pokemon Sets Model


`const Sets = new Schema ({ 
    code: String,
    ptcgoCode: String,
    name: String,
    series: String,
    totalCards: Number,
    standardLegal: Boolean,
    expandedLegal: Boolean,
    releaseDate: String,
    symbolUrl: String,
    logoUrl: String
})`