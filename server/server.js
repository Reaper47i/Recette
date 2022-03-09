const PORT = process.env.PORT;
const axios = require("axios");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const server = express();
server.use(cors({ origin: true }));
const url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.API_KEY}`;

server.get("/", (req, res) => {
  res.json("hello humans");
});

server.get("/topPick", (req, res) => {
  const options = {
    method: "GET",
    url: url,
  };
  axios
    .request(options)
    .then((response) => {
      res.json(response.data.recipes);
    })
    .catch((error) => {
      console.log(error);
    });
});

// server.use("/data", require("./routes/randomRoute"));

server.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
