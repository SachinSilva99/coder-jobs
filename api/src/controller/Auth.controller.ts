import {Request, Response} from "express";
import UserModel from "../model/User.model";
import {IUser} from "../types/SchemaTypes";
import tryCatch from "../utils/TryCatch";

export const userSignUp = tryCatch(async (req: Request, res: Response) => {
  const user: IUser = req.body;
  const saveUser = await new UserModel(user).save();
  res.status(200).send(saveUser._id);
});