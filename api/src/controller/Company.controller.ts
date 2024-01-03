import tryCatch from "../utils/TryCatch";
import {Request, Response} from "express";
import {ICompany} from "../types/SchemaTypes";
import {StandardResponse} from "../dto/StandardResponse";
import {CompanyModel} from "../model/Company.model";
import UserModel from "../model/User.model";
import {UserType} from "../enums/Enums";

export const createCompany = tryCatch(async (req: Request, res: Response) => {
  const company: ICompany = req.body;
  const existingUser = await UserModel.findOne({_id: company.user, deleteStatus: false, userType: UserType.COMPANY});
  if (!existingUser) {
    const errorResponse: StandardResponse<string> = {
      statusCode: 400,
      msg: "Invalid company user ID. Company user does not exist."
    };
    return res.status(400).send(errorResponse);
  }
  const companyModel = new CompanyModel(company);
  const savedCompany = await companyModel.save();
  const response: StandardResponse<string> = {
    statusCode: 201,
    msg: "company created successfully",
    data: savedCompany._id
  }
  res.status(201).send(response);
});