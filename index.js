const express = require("express");
const app = express();

app.set("port", process.env.PORT || 4000);

const parser = require('body-parser')

app.use(parser.urlencoded({extended:true}));
app.use(parser.json());

app.use(require("./routes/index.js"));

// app.listen(4000, () => console.log("Running on port 4000"));

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
  });