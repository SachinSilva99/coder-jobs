import tryCatch from "../utils/TryCatch";
import {Request, Response} from "express";
import {ICompany} from "../types/SchemaTypes";
import {StandardResponse} from "../dto/StandardResponse";
import {CompanyModel} from "../model/Company.model";
import UserModel from "../model/User.model";
import {UserType} from "../enums/Enums";

/**
 * Create a company
 */
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
/**
 * Get a company
 */
export const getCompany = tryCatch(async (req: Request, res: Response) => {
  const companyId = req.params.id;
  const company = await CompanyModel.findOne({
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

/**
 * Update a company
 */
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

/**
 * Get all companies
 */
export const getAllCompanies = tryCatch(async (req: Request, res: Response) => {
  const query: any = req.query;
  const page: number = query.page || 1;
  const size: number = query.size || 10;
  const companies = await CompanyModel.find({
    deleteStatus: false,
  }).limit(size).skip(size * (page - 1));
  const countDocuments = await CompanyModel.countDocuments({deleteStatus:false});
  const pageCount = Math.ceil(countDocuments / size);
  const response: StandardResponse<any> = {
    statusCode: 200,
    msg: "OK",
    data: companies,
    pageCount: pageCount
  }
  res.status(200).send(response);
});
