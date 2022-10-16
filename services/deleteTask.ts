import { ObjectId } from "https://deno.land/x/web_bson@v0.2.5/mod.ts";
import COLLECTION from "../database/collection.ts";

const deleteTask = async (id: string): Promise<void> => {
  await COLLECTION.deleteOne({ _id: new ObjectId(id) });
};
export default deleteTask;
