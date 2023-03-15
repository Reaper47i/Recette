const express = require("express");
const axios = require("axios");
const routerDisc = express.Router();

// @routerDiscover      GET /api/disc
//@desc                 get indian recipes from api
routerDisc.get("/", (req, res) => {
  const options = {
    method: "GET",
    url: `https://api.spoonacular.com/recipes/random?number=10&apiKey=${process.env.API_KEY}`,
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

module.exports = routerDisc;
