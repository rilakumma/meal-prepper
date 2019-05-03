const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.listen(4000, () => {
  console.log("Server is listening on port 4000!!! ~*~*~*~*~*~*");
});
