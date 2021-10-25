import { createApp } from "./create_greet_app.ts";
import { superoak } from "./deps.ts";

const app = createApp();

Deno.test(`Get /greetで200で"Hello, anonymous!が帰ってくる`, async () => {
  const request = await superoak(app);
  await request.get("/greet").expect(200).expect("Hello anonymous!");
});
