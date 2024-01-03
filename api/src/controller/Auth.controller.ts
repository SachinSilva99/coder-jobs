import {Request, Response} from "express";
import UserModel from "../model/User.model";
import {IUser} from "../types/SchemaTypes";
import tryCatch from "../utils/TryCatch";
import {StandardResponse} from "../dto/StandardResponse";

export const userSignUp = tryCatch(async (req: Request, res: Response) => {
  const user: IUser = req.body;
  const saveUser = await new UserModel(user).save();
  const response: StandardResponse<string> = {statusCode: 201, msg: "sign up successful", data: saveUser._id}
  res.status(200).send(response);
});