import { ObjectId, Timestamp } from "https://deno.land/x/web_bson/mod.ts";

export default interface TaskSchema {
  _id: ObjectId;
  entry: {
    title: string;
    body: string;
    checked: boolean;
  };
  timestamp: Timestamp;
}
