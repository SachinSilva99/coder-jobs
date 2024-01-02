import {Request, Response} from "express";
import {IJobSeeker} from "../types/SchemaTypes";

export const createJobSeeker = (req: Request, res: Response, next: (e: any) => void) => {
  const jobSeeker: IJobSeeker = req.body;

}
