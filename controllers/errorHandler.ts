import { Response } from "https://deno.land/x/oak/response.ts";

const errorHandler = async (
  { response }: { response: Response },
  // deno-lint-ignore ban-types
  fn: Function,
) => {
  try {
    await fn();
  } catch (_e) {
    response.status = 500;
    response.body = { msg: "Internal server error!" };
  }
};

export default errorHandler;
