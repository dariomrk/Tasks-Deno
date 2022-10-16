import { Response } from "https://deno.land/x/oak@v11.1.0/response.ts";
import getTask from "../services/getTask.ts";
import updateTask from "../services/updateTask.ts";

export default async (
  { params, request, response }: {
    // deno-lint-ignore no-explicit-any
    params: any;
    // deno-lint-ignore no-explicit-any
    request: any;
    response: Response;
  },
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

  if (!request.body) {
    response.status = 400;
    response.body = { msg: "Invalid request body!" };
    return;
  }

  const entry = await request.body({ type: "json" }).value;

  if (entry === (undefined || null) || entry === "") {
    response.status = 400;
    response.body = { msg: "Missing information (entry) in request body!" };
    return;
  }

  if (entry.title === (undefined || null)) {
    response.status = 400;
    response.body = {
      msg: "Missing information (entry.title) in request body!",
    };
    return;
  }

  if (entry.body === (undefined || null)) {
    response.status = 400;
    response.body = {
      msg: "Missing information (entry.body) in request body!",
    };
    return;
  }

  if (entry.checked === (undefined || null)) {
    response.status = 400;
    response.body = {
      msg: "Missing information (entry.checked) in request body!",
    };
    return;
  }

  await updateTask(id, entry);
  response.status = 200;
  response.body = { msg: "Successfully updated task." };
};
