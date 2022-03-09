// //  todays Pick =>
// const axios = require("axios");

// exports.randomController = (req, res) => {
//   const options = {
//     method: "GET",
//     url: `https://api.spoonacular.com/recipes/random?apiKey=${process.env.API_KEY}`,
//   };
//   axios
//     .request(options)
//     .then((response) => {
//       res.json(response.data.recipes);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
