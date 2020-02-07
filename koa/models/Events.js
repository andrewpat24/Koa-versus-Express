const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  creator_uid: {
    type: String
  },
  name: {
    type: String
  },
  date_time: {
    type: String
  }
});

mongoose.model("events", eventsSchema);
