import { Response } from "https://deno.land/x/oak/response.ts";
import getTasks from "../services/getTasks.ts";

export default async ({ response }: { response: Response }) => {
  response.body = { data: await getTasks() };
};
