import TaskSchema from "../interfaces/taskSchema.ts";
import COLLECTION from "../database/collection.ts";

const getTasks = async (): Promise<TaskSchema[]> => {
  return await COLLECTION.find({}).toArray();
};

export default getTasks;
