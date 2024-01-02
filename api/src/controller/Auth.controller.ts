import {Request, Response} from "express";
import UserModel from "../model/User.model";
import {IUser} from "../types/SchemaTypes";

export const userSignUp = async (req: Request, res: Response, next: (e: any) => void) => {
  try {
    const user: IUser = req.body;
    const saveUser = await new UserModel(user).save();
    res.status(200).send(saveUser._id);
  } catch (e) {
    next(e);
  }
};