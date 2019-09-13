const mongoose = require("mongoose");

mongoose.Promise = Promise;

// const mongoURI = "mongodb://localhost/poke-api";
let mongoURI = "";

if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/poke-api";
  }

mongoose.connect(mongoURI, {useNewUrlParser: true}).then(instance => {
    console.log(`Connected to db ${instance.connections[0].name}`)
}).catch(err => console.log("Connection Failed.", err));

module.exports = mongoose;