const express = require("express");
const router = express.Router();
const axios = require("axios");

// @router      GET /api/topPick
// @desc        gets recipes from api

router.get("/", (req, res) => {
  const options = {
    method: "GET",
    url: `https://api.spoonacular.com/recipes/random?apiKey=${process.env.API_KEY}`,
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

module.exports = router;
