import express, {Request, Response} from "express";
import UserModel from "../model/User.model";
import {IUser} from "../types/SchemaTypes";
import tryCatch from "../utils/TryCatch";
import {StandardResponse} from "../dto/StandardResponse";
import bcrypt from 'bcrypt';
import process from "process";
import jwt, {Secret} from "jsonwebtoken";
import {NotFoundError} from "../types/error/NotFoundError";
import {UnAuthorizedError} from "../types/error/UnAuthorizedError";

export const userSignUp = tryCatch(async (req: Request, res: Response) => {
  const user: IUser = req.body;
  user.password = await bcrypt.hash(user.password, 10);
  const saveUser = await new UserModel(user).save();
  const response: StandardResponse<string> = {statusCode: 201, msg: "sign up successful", data: saveUser._id}
  res.status(200).send(response);
});


export const login = tryCatch(async (req: Request, res: Response, next: express.NextFunction) => {
    const {email, password} = req.body;
    const user = await UserModel.findOne({email: email, deleteStatus: false});
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new UnAuthorizedError("InValid Credentials")
      }
      const expiresIn = "1w";
      user.password = "";
      jwt.sign({user}, process.env.SECRET_KEY as Secret, {expiresIn}, (err: any, token: any) => {
        if (err) {
          next();
          return;
        }
        const resBody = {
          user: user,
          accessToken: token
        }
        const response: StandardResponse<any> = {statusCode: 200, data: resBody, msg: "Access"};
        res.status(200).send(response);
      });
      return;
    }
    throw new NotFoundError("User not found");
  }
)
