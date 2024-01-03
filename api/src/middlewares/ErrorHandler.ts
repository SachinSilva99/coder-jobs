import {StandardResponse} from "../dto/StandardResponse";

const errorHandler = (err: any, req: any, res: any, next: () => void) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  const response: StandardResponse<string> = {
    statusCode: statusCode,
    msg: message
  }
  return res.status(statusCode).send(response);
}
export default errorHandler;