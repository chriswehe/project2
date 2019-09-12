const express = require("express");
const app = express();

const parser = require('body-parser')

app.use(parser.urlencoded({extended:true}));
app.use(parser.json());

app.use(require("./routes/index.js"));

app.listen(4000, () => console.log("Running on port 4000"));