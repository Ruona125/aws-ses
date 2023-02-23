const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("hello world");
});

app.listen(8000, () => {
  console.log("listening to port 8000...");
});
