import deleteTask from "./deleteTask.ts";
import createTask from "./createTask.ts";

const updateTask = async (
  id: string,
  entry: { title: string; body: string; checked: boolean },
) => {
  await deleteTask(id);
  await createTask(entry,id);
};

export default updateTask;
