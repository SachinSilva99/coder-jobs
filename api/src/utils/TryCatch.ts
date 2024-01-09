import {NextFunction, Request, Response} from "express";

const tryCatch = (controller: any) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await controller(req, res);
  } catch (er) {
    console.log("catch error")
    return next(er);
  }
}
export default tryCatch;
