import {Request, Response} from "express";

const tryCatch = (controller: any) => async (req: Request, res: Response, next: (e: any) => void) => {
  try {
    await controller(req, res);
  } catch (er) {
    return next(er)
  }
}
export default tryCatch;