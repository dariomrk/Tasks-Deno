import { Response } from "https://deno.land/x/oak@v11.1.0/response.ts";
import createTask from "../services/createTask.ts";
import EntrySchema from "../interfaces/entrySchema.ts";

export default async (
  // deno-lint-ignore no-explicit-any
  { request, response }: { request: any; response: Response },
) => {
  if (!request.body) {
    response.status = 400;
    response.body = { msg: "Invalid request body!" };
    return;
  }

  const entry = await request.body({ type: "json" }).value;
  console.log(entry);

  if(entry === (undefined || null) || entry === "") {
    response.status = 400;
    response.body = { msg: "Missing information (entry) in request body!" };
    return;
  }

  if (entry.title === (undefined || null)) {
    response.status = 400;
    response.body = { msg: "Missing information (entry.title) in request body!" };
    return;
  }

  if (entry.body === (undefined || null)) {
    response.status = 400;
    response.body = { msg: "Missing information (entry.body) in request body!" };
    return;
  }
  
  if (entry.checked === (undefined || null)) {
    response.status = 400;
    response.body = { msg: "Missing information (entry.checked) in request body!" };
    return;
  }

  await createTask(entry as EntrySchema);
  response.status = 201;
  response.body = { msg: "Successfully created new task." };
};
