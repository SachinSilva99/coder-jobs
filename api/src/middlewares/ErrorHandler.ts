import {StandardResponse} from "../dto/StandardResponse";
import {NotFoundError} from "../types/error/NotFound";

const errorHandler = (err: any, req: any, res: any, next: () => void) => {
  if (err instanceof NotFoundError) {
    res.status(err.statusCode || 404).send({
      statusCode: err.statusCode || 404,
      msg: err.message,
    });
  } else {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    const response: StandardResponse<string> = {
      statusCode: statusCode,
      msg: message
    }
    return res.status(statusCode).send(response);
  }
}
export default errorHandler;
