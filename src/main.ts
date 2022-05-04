import { Context } from "koa";

const Koa = require("koa");
const app = new Koa();

app.use(async (ctx: Context) => {
  ctx.body = "Hello World";
});

app.listen(3000);
