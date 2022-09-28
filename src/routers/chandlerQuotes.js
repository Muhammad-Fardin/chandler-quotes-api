const express = require("express");
const router = new express.Router();
const ChandlerQuotes = require("../../src/models/quotes");

router.post("/quotes", async (req, res) => {
  try {
    const sendQoutes = new ChandlerQuotes(req.body);
    await sendQoutes.save();
    res.send(sendQoutes);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/quotes", async (req, res) => {
  try {
    const getQoutes = await ChandlerQuotes.find({});
    res.send(getQoutes);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/random", async (req, res) => {
  try {
    const getQoutes = await ChandlerQuotes.find({});
    let randomIndex = Math.floor(Math.random() * 58);
    const randomQuotes = getQoutes[randomIndex];
    res.send(randomQuotes);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/quotes/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getQoutes = await ChandlerQuotes.findById({ _id: _id });
    res.send(getQoutes);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/", (req, res) => {
  try {
    res.send(
      "go to /quotes for all chandler quotes and /random for random chandler quotes"
    );
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
