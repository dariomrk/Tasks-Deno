import { Application } from "https://deno.land/x/oak/mod.ts";

import CONFIG from "./config.ts";
import ROUTER from "./routes/router.ts";
// import err404 from "./controllers/errors/404.ts";
// import errorHandler from "./controllers/errorHandler.ts";

const APP = new Application();

APP.use(ROUTER.routes());
APP.use(ROUTER.allowedMethods());
// APP.use(errorHandler);
// APP.use(err404);

console.log(`Listening on ${CONFIG.HOST}:${CONFIG.PORT}`);
