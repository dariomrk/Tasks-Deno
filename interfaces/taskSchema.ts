import { ObjectId, Timestamp } from "https://deno.land/x/web_bson/mod.ts";
import EntrySchema from "./entrySchema.ts";

export default interface TaskSchema {
  _id: ObjectId;
  entry: EntrySchema;
  timestamp: Timestamp;
}
