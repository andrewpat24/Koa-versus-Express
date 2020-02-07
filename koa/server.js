const Koa = require("koa");
const app = new Koa();

// Routes
const rootRoute = require("./routes/rootRoute");
console.log(rootRoute);
app.use(rootRoute.routes());

// Port
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is running on port ${port}.`);
});

module.exports = app;
