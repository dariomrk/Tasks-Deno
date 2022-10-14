import { ObjectId, Timestamp } from "https://deno.land/x/web_bson/mod.ts";
import COLLECTION from "./database.ts";

const dbHandler = {
  selectAll: async () => {
    return await COLLECTION.find({}).toArray();
  },

  selectById: async (id: ObjectId) => {
    const task = await COLLECTION.find({ id: id }).toArray();
    return task[0];
  },

  insertNew: async (
    entry: { title: string; body: string; checked: boolean },
  ) => {
    await COLLECTION.insertOne({
      _id: new ObjectId(),
      entry: entry,
      timestamp: new Timestamp(),
    });
  },

  deleteById: async (id: string) => {
    await COLLECTION.deleteOne({ _id: new ObjectId(id) });
  },
};

export default dbHandler;
