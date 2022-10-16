import { MongoClient } from "https://deno.land/x/mongo@v0.31.1/mod.ts";
import TaskSchema from "../interfaces/taskSchema.ts";

import CONFIG from "../config.ts";

const CLIENT = new MongoClient();

await CLIENT.connect(`mongodb://${CONFIG.DB_HOST}:${CONFIG.DB_PORT}`);
const COLLECTION = await CLIENT.database(CONFIG.DB_NAME).collection<TaskSchema>(
  "data",
);

export default COLLECTION;
