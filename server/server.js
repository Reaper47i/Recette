const PORT = process.env.PORT || 8000;
// const axios = require("axios");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const server = express();
server.use(cors({ origin: true }));

server.get("/", (req, res) => {
  res.json("hello humans");
});

// routes =>
server.use("/api/topPick", require("./routes/topPick"));
server.use("/api/disc", require("./routes/discover"));
server.use("/api/indian", require("./routes/indian"));
// server.use("/api/cusines", require("./routes/cusines"));
// server.use("/api/search", require("./routes/search"));

server.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
