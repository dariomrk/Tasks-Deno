// deno-lint-ignore-file no-explicit-any
import { Router } from "https://deno.land/x/oak/mod.ts";

import getTasks from "./controllers/getTasks.ts";
import getTask from "./controllers/getTask.ts";
// import createTask from "./controllers/createTask.ts";
// import updateTask from "./controllers/updateTask.ts";
// import deleteTask from "./controllers/deleteTask.ts";

const ROUTER = new Router();

ROUTER
  .get("/tasks", getTasks as any)
  .get("/tasks/:id", getTask as any);
//   .post("/tasks", createTask)
//   .put("/tasks/:id", updateTask)
//   .delete("/tasks/:id", deleteTask)

export default ROUTER;
