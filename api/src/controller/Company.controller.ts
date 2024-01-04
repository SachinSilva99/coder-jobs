import tryCatch from "../utils/TryCatch";
import {Request, Response} from "express";
import {ICompany} from "../types/SchemaTypes";
import {StandardResponse} from "../dto/StandardResponse";
import {CompanyModel} from "../model/Company.model";
import UserModel from "../model/User.model";
import {UserType} from "../enums/Enums";

export const createCompany = tryCatch(async (req: Request, res: Response) => {
  const company: ICompany = req.body;
  const existingUser = await UserModel.findOne({
    _id: company.user,
    deleteStatus: false,
    userType: UserType.COMPANY
  });
  if (!existingUser) {
    const errorResponse: StandardResponse<string> = {
      statusCode: 400,
      msg: "Invalid company user ID. Company user does not exist."
    };
    return res.status(400).send(errorResponse);
  }
  const companyModel = new CompanyModel(company);
  const savedCompany = await companyModel.save();
  const response: StandardResponse<any> = {
    statusCode: 201,
    msg: "company created successfully",
    data: savedCompany._id
  }
  res.status(201).send(response);
});

export const getCompany = tryCatch(async (req: Request, res: Response) => {
  const companyId = req.params.id;
  const company = await CompanyModel.find({
    _id: companyId,
    deleteStatus: false,
  });
  if (!company) {
    const errorResponse: StandardResponse<string> = {
      statusCode: 400,
      msg: "Invalid company  ID. Company  does not exist."
    };
    return res.status(400).send(errorResponse);
  }
  const response: StandardResponse<any> = {
    statusCode: 200,
    msg: "OK",
    data: company
  }
  res.status(200).send(response);
});
export const updateCompany = tryCatch(async (req: Request, res: Response) => {
  const companyId = req.params.id;
  const company: ICompany = req.body;
  const companyFound = await CompanyModel.find({
    _id: companyId,
    deleteStatus: false,
  });
  if (!companyFound) {
    const errorResponse: StandardResponse<string> = {
      statusCode: 400,
      msg: "Invalid company  ID. Company  does not exist."
    };
    return res.status(400).send(errorResponse);
  }
  await CompanyModel.findOneAndUpdate({_id: companyId}, company);
  res.status(204).send();
});


export const getAllCompanies = tryCatch(async (req: Request, res: Response) => {
  const companies = await CompanyModel.find({
    deleteStatus: false,
  });
  const response: StandardResponse<any> = {
    statusCode: 200,
    msg: "OK",
    data: companies
  }
  res.status(200).send(response);
});