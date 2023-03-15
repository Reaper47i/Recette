const express = require("express");
const axios = require("axios");
const indrouter = express.Router();

// @router      GET /api/india
// @desc        get indian cusines

indrouter.get("/", (req, res) => {
  const options = {
    method: "GET",
    url: `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}&cuisine=Indian`,
  };
  axios
    .request(options)
    .then((response) => {
      res.json(response.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = indrouter;
