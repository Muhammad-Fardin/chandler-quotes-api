const express = require("express");
const mongoose = require("mongoose");

const quotesSchema = new mongoose.Schema({
  quote: { type: String },
});

const ChandlerQuotes = new mongoose.model("Quote", quotesSchema);
module.exports = ChandlerQuotes;
