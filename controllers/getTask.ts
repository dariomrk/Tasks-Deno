import { Response } from "https://deno.land/x/oak/response.ts";
import getTask from "../services/getTask.ts";

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

  response.status = 200;
  response.body = { data: task };
};
