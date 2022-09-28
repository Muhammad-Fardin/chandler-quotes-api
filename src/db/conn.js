const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://fardin:fardin9899@clus.h4sdtec.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database Engaged!");
  })
  .catch((e) => {
    console.log("Database Failure!");
  });
