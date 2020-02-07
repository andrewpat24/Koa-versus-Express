require("dotenv").config();

const express = require("express");
const app = express();

// Middleware
const bodyParser = require("body-parser");
const logger = require("express-pino-logger");
const helmet = require("helmet");

app
  .use(
    bodyParser.urlencoded({
      extended: true
    })
  )
  .use(bodyParser.json())
  .use(logger())
  .use(helmet());

// Mongoose
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);
require("./models/Events");

// Routes
const rootRoute = require("./routes/rootRoute");
app.use("/", rootRoute);

// Port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅server is running on port ${port} .`);
});

module.exports = app;
