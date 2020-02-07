const express = require("express");
const router = express.Router();

// Mongoose
const mongoose = require("mongoose");
const Events = mongoose.model("events");

router.get("/", (req, res) => {
  res.send({ response: true });
});

router.post("/create", async (req, res) => {
  const { creator_uid, name, date_time } = req.body;
  const newEvent = new Events({
    creator_uid,
    name,
    date_time
  });

  const eventSavedResponse = await newEvent.save();
  res.send({ response: true, eventSavedResponse });
});

module.exports = router;
