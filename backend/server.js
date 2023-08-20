const express = require("express");
const app = express();
require("dotenv").config();

app.get("/api", (req, res) => {
  res.json({ mssg: "This is a successful GET req" });
});

app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});
