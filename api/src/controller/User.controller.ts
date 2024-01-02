import {Request, Response} from "express";
import UserModel, {IUser} from "../model/User.model";
import {StandardResponse} from "../dto/StandardResponse";

export const getAllUsers = async (req: Request, res: Response, next: (e: any) => void) => {
  try {
    const allUsers:IUser[] = await UserModel.find();
    const response: StandardResponse<IUser[]> = {statusCode: 200, msg: "ok", data: allUsers};
    res.status(200).send(response);
  } catch (e) {
    next(e);
  }
};