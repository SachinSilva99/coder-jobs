import {Request, Response} from "express";
import UserModel from "../model/User.model";
import {StandardResponse} from "../dto/StandardResponse";
import {IUser} from "../types/SchemaTypes";
import tryCatch from "../utils/TryCatch";
import JobSeekerModel from "../model/JobSeeker.model";

export const getAllUsers = tryCatch(async (req: Request, res: Response, next: (e: any) => void) => {
  const query: any = req.query;
  const page: number = query.page || 1;
  const size: number = query.size || 10;
  const allUsers: IUser[] = await UserModel.find({deleteStatus: false}).limit(size).skip(size * (page - 1));
  const countDocuments = await UserModel.countDocuments({deleteStatus: false});
  const pageCount = Math.ceil(countDocuments / size);
  const response: StandardResponse<IUser[]> = {statusCode: 200, msg: "ok", data: allUsers, pageCount: pageCount};
  res.status(200).send(response);
});