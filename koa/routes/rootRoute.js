const KoaRouter = require("koa-router");
const router = new KoaRouter();

// Mongoose
const mongoose = require("mongoose");
const Events = mongoose.model("events");

router.get("/", async (ctx, next) => {
  ctx.body = { response: true };
});

router.post("/create", async (ctx, next) => {
  const { creator_uid, name, date_time } = ctx.request.body;
  const newEvent = new Events({
    creator_uid,
    name,
    date_time
  });

  const eventSavedResponse = await newEvent.save();

  ctx.body = { response: true, eventSavedResponse };
});

module.exports = router;
