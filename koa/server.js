require("dotenv").config();

const Koa = require("koa");
const app = new Koa();

// Middleware
const logger = require("koa-logger");
const helmet = require("koa-helmet");
const bodyparser = require("koa-bodyparser");

app
  .use(logger())
  .use(helmet())
  .use(bodyparser());

// Mongoose
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);

// Routes
const rootRoute = require("./routes/rootRoute");
app.use(rootRoute.routes());

// Port
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`✅ server is running on port ${port}.`);
});

module.exports = app;
