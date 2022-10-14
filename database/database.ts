import {
  Bson,
  MongoClient,
} from "https://deno.land/x/mongo@LATEST_VERSION/mod.ts";

import CONFIG from "../config";

const CLIENT = new MongoClient();

await CLIENT.connect(`mongodb://${CONFIG.DB_HOST}:${CONFIG.DB_PORT}`);

const DATABASE = CLIENT.database(CONFIG.DB_NAME);

export default DATABASE;

// TODO: Test wether the database connection is valid!