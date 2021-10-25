import { Application, Router, helpers } from "./deps.ts";

export const createApp: () => Application = () => {
  const app = new Application();
  const router = new Router();

  router.get("/greet", (ctx) => {
    const { name = "anonymous" } = helpers.getQuery(ctx);
    ctx.response.body = `Hello ${name}!`;
  });

  app.use(router.routes());
  return app;
};
