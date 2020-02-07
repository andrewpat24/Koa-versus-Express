const KoaRouter = require("koa-router");
const router = new KoaRouter();

router.get("/", async (ctx, next) => {
  ctx.body = { response: true };
});

module.exports = router;
