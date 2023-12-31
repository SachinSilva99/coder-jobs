import {Request, Response} from "express";
import UserModel, {IUser} from "../model/User.model";

export const userSignUp = async (req: Request, res: Response, next: (e: any) => void) => {
  try {
    const {username, fName, lName, email, password} = req.body;
    const user: IUser = {username, fName, lName, email, password};
    const saveUser = await new UserModel(user).save();
    res.status(200).send(saveUser);
  } catch (e) {
    next(e);
  }
};