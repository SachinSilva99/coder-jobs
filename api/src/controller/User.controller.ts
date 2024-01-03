import {Request, Response} from "express";
import UserModel from "../model/User.model";
import {StandardResponse} from "../dto/StandardResponse";
import {IUser} from "../types/SchemaTypes";
import tryCatch from "../utils/TryCatch";

export const getAllUsers = tryCatch(async (req: Request, res: Response, next: (e: any) => void) => {
    const allUsers: IUser[] = await UserModel.find();
    const response: StandardResponse<IUser[]> = {statusCode: 200, msg: "ok", data: allUsers};
    res.status(200).send(response);
});