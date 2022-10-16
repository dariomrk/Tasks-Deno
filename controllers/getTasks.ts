import { Response } from "https://deno.land/x/oak@v11.1.0/response.ts";
import getTasks from "../services/getTasks.ts";

export default async ({ response }: { response: Response }) => {
  response.body = { data: await getTasks() };
};
