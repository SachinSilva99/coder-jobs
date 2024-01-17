import tryCatch from "../utils/TryCatch";
import {Request, Response} from "express";
import {StandardResponse} from "../dto/StandardResponse";
import {IVacancy} from "../types/SchemaTypes";
import VacancyModel from "../model/Vacancy.model";
import {CompanyModel} from "../model/Company.model";
import {NotFoundError} from "../types/error/NotFoundError";

/**
 * Create a vacancy
 */
export const createVacancy = tryCatch(async (req: Request, res: Response) => {
  const vacancy: IVacancy = req.body;
  // @ts-ignore
  const userId = res.tokenData.user._id;
  const company = await CompanyModel.findOne({user: userId});
  if (!company) {
    throw new NotFoundError("Company not found");
  }
  vacancy.company = company._id;
  const vacancyModel = new VacancyModel(vacancy);
  const savedVacancy = await vacancyModel.save();
  const response: StandardResponse<string> = {statusCode: 201, msg: "created successfully", data: savedVacancy._id}
  res.status(201).send(response);
});

/**
 * get all vacancies
 */
export const getAllVacancies = tryCatch(async (req: Request, res: Response) => {
  const query: any = req.query;
  const {page, size} = query;
  const vacancies = await VacancyModel.find().limit(size).skip(size * (page - 1));
  const response: StandardResponse<any> = {statusCode: 200, msg: "OK", data: vacancies}
  res.status(200).send(response);
});

/**
 * get a vacancy
 */
export const getVacancy = tryCatch(async (req: Request, res: Response) => {
  const vacancy = await VacancyModel.findOne({_id: req.params.id, deleteStatus: false});
  if (!vacancy) {
    const errorResponse: StandardResponse<string> = {
      statusCode: 400,
      msg: `${req.params.id} vacancy not found!`
    };
    return res.status(404).send(errorResponse);
  }
  const response: StandardResponse<any> = {statusCode: 200, msg: "OK", data: vacancy}
  res.status(200).send(response);
});

/**
 * update a vacancy
 */
export const updateVacancy = tryCatch(async (req: Request, res: Response) => {

  // @ts-ignore
  const userId = res.tokenData.user._id;
  const vacancyId = req.params.id;
  const company = await CompanyModel.findOne({user: userId});
  if (!company) {
    throw new NotFoundError("Company not found");
  }
  const vacancy = await VacancyModel.findOne({company: company._id, _id: vacancyId, deleteStatus: false});
  if (!vacancy) {
    const errorResponse: StandardResponse<string> = {
      statusCode: 404,
      msg: `${req.params.id} vacancy not found!`
    };
    return res.status(404).send(errorResponse);
  }
  await VacancyModel.findOneAndUpdate({_id: vacancyId}, req.body);
  res.status(204).send();
});

/**
 * delete a vacancy
 */
export const deleteVacancy = tryCatch(async (req: Request, res: Response) => {
  const vacancy = await VacancyModel.findOne({_id: req.params.id, deleteStatus: false});
  if (!vacancy) {
    const errorResponse: StandardResponse<string> = {
      statusCode: 404,
      msg: `${req.params.id} vacancy not found!`
    };
    return res.status(404).send(errorResponse);
  }
  await VacancyModel.findOneAndUpdate({_id: req.params.id}, {deleteStatus: true});
  res.status(204).send();
});

/**
 * get all vacancy for a specific company
 */
export const getAllVacanciesOfCompany = tryCatch(async (req: Request, res: Response) => {
  const query: any = req.query;
  const page: number = query.page || 1;
  const size: number = query.size || 10;
  const vacancies = await VacancyModel.find({
    company: req.params.companyId,
    deleteStatus: false
  }).limit(size).skip(size * (page - 1));

  const countDocuments = await VacancyModel.countDocuments({
    company: req.params.companyId,
    deleteStatus: false
  });

  const pageCount = Math.ceil(countDocuments / size);
  const response: StandardResponse<any> = {
    statusCode: 200,
    msg: "OK",
    data: vacancies,
    pageCount: pageCount
  }
  res.status(200).send(response);
});

/**
 * get all vacancy for a logged in company
 */
export const getAllVacanciesOfLoggedInCompany = tryCatch(async (req: Request, res: Response) => {
  const query: any = req.query;
  const page: number = query.page || 1;
  const size: number = query.size || 10;

  // @ts-ignore
  const userId = res.tokenData.user._id;
  const company = await CompanyModel.findOne({user: userId});
  if (!company) throw new NotFoundError("company not found");
  const vacancies = await VacancyModel.find({
    company: company._id,
    deleteStatus: false
  }).limit(size).skip(size * (page - 1));

  const countDocuments = await VacancyModel.countDocuments({
    company: req.params.companyId,
    deleteStatus: false
  });

  const pageCount = Math.ceil(countDocuments / size);
  const response: StandardResponse<any> = {
    statusCode: 200,
    msg: "OK",
    data: vacancies,
    pageCount: pageCount
  }
  res.status(200).send(response);
});
