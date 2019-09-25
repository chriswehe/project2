const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.set("port", process.env.PORT || 4000);

const parser = require('body-parser')

app.use(parser.urlencoded({extended:true}));
app.use(parser.json());

app.use(require("./routes/index.js"));

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
  });