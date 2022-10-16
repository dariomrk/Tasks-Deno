import { Application } from "https://deno.land/x/oak@v11.1.0/mod.ts";

import CONFIG from "./config.ts";
import ROUTER from "./router.ts";
import errorHandler from "./controllers/errorHandler.ts";

const APP = new Application();

// deno-lint-ignore no-explicit-any
APP.use(errorHandler as any);
APP.use(ROUTER.routes());
APP.use(ROUTER.allowedMethods());

console.log(`Listening on ${CONFIG.HOST}:${CONFIG.PORT}`);
APP.listen(`${CONFIG.HOST}:${CONFIG.PORT}`);
