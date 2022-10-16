import { Response } from "https://deno.land/x/oak@v11.1.0/response.ts";
import getTask from "../services/getTask.ts";
import deleteTask from "../services/deleteTask.ts";

export default async (
  // deno-lint-ignore no-explicit-any
  { params, response }: { params: any; response: Response },
) => {
  const id = params.id;

  if (!id) {
    response.status = 400;
    response.body = { msg: "Invalid id parameter!" };
    return;
  }

  const task = await getTask(id);

  if (!task) {
    response.status = 404;
    response.body = { msg: "Task with given id does not exist!" };
    return;
  }

  await deleteTask(id);
  response.status = 200;
  response.body = { msg: "Successfully deleted task." };
};
