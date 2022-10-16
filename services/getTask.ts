import { ObjectId } from "https://deno.land/x/web_bson@v0.2.5/mod.ts";
import TaskSchema from "../interfaces/taskSchema.ts";
import COLLECTION from "../database/collection.ts";

const getTask = async (id: string): Promise<TaskSchema | null> => {
  const idObj = new ObjectId(id);
  const task = await COLLECTION.findOne({ _id: idObj });
  return task ? task : null;
};

export default getTask;
