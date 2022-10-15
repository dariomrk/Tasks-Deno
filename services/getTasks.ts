import TaskSchema from "../interfaces/taskSchema.ts";
import COLLECTION from "../database/collection.ts";

const getTasks = async (): Promise<TaskSchema[] | null> => {
  const tasks = await COLLECTION.find({}).toArray();
  return tasks.length ? tasks : Promise.resolve(null);
};

export default getTasks;
