import { ObjectId, Timestamp } from "https://deno.land/x/web_bson/mod.ts";
import COLLECTION from "../database/collection.ts";

const createTask = async (
  entry: { title: string; body: string; checked: boolean },
  id = "",
): Promise<void> => {
  const idObj = new ObjectId(id);

  await COLLECTION.insertOne({
    _id: idObj,
    entry: entry,
    timestamp: new Timestamp(),
  });
};

export default createTask;
