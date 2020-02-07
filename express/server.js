require("dotenv").config();

// Express dependencies
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Bodyparser
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

// Mongoose
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);

// Routes
const rootRoute = require("./routes/rootRoute");
app.use("/", rootRoute);

// Port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port} .`);
});

module.exports = app;
