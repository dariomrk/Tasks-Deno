import { consumeMediaParam } from "https://deno.land/std@0.152.0/media_types/_util.ts";
import { config } from "https://deno.land/std/dotenv/mod.ts";

const CONFIG = await config({ safe: true, path: "./.env" });

export default CONFIG;
