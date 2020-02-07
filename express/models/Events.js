const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  creator_uid: {
    type: String
  },
  name: {
    type: String
  },
  created_at: {
    default: Date.now
  },
  date_time: {
    type: Date
  }
});

mongoose.model("events", eventsSchema);
