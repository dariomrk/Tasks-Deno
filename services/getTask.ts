import { ObjectId } from "https://deno.land/x/web_bson/mod.ts";
import TaskSchema from "../interfaces/taskSchema.ts";
import COLLECTION from "../database/collection.ts";

const getTask = async (id: string): Promise<TaskSchema | null> => {
  const idObj = new ObjectId(id);
  const task = await COLLECTION.find({ _id: idObj }).toArray();
  return task.length ? task[0] : Promise.resolve(null);
};

export default getTask;
