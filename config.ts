import { config } from "https://deno.land/std/dotenv/mod.ts";

const CONFIG = await config({ safe: true, path: "./.env" });

export default CONFIG;
