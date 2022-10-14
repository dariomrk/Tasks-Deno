import { Router } from "https://deno.land/x/oak/mod";

import getTasks from "./controllers/getTasks.ts";
import getTask from "./controllers/getTask.ts";
import createTask from "./controllers/createTask.ts";
import updateTask from "./controllers/updateTask.ts";
import deleteTask from "./controllers/deleteTask.ts";

const ROUTER = new Router();

ROUTER
  .get("/tasks", getTasks)
  .get("/tasks/:id", getTask)
  .post("/tasks", createTask)
  .put("/tasks/:id", updateTask)
  .delete("/tasks/:id", deleteTask);

export default ROUTER;
