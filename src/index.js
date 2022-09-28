const express = require("express");
const router = require("../src/routers/chandlerQuotes");
require("../src/db/conn");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log("it works!");
});
