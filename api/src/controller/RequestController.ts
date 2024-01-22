import tryCatch from "../utils/TryCatch";
import {RequestModel} from "../model/Request.model";
import {Request, Response} from "express";
import {StandardResponse} from "../dto/StandardResponse";
import {NotFoundError} from "../types/error/NotFoundError";
import {validateJobSeeker, validateUserAndCompany} from "./helper-functions/RequestHelperFunctions";


/**
 * Create Request
 */
export const createRequest = tryCatch(async (req: Request, res: Response) => {
  // @ts-ignore
  const companyUserId = res.tokenData.user._id;
  const jobSeekerId = req.body.jobSeeker;
  const {company} = await validateUserAndCompany(companyUserId);
  await validateJobSeeker(jobSeekerId);
  const requestModel = new RequestModel({
    company: company._id,
    jobSeeker: jobSeekerId,
    description: req.body.description,
    jobTitle: req.body.jobTitle
  });
  const savedRequest = await requestModel.save();
  const response: StandardResponse<string> = {
    statusCode: 201,
    msg: "Request Created successful",
    data: savedRequest._id
  }
  res.status(200).send(response);
});
/**
 * update  Request
 */
export const updateRequest = tryCatch(async (req: Request, res: Response) => {
  // @ts-ignore
  const companyUserId = res.tokenData.user._id;
  const requestId = req.params.id;
  const jobSeekerId = req.body.jobSeeker;
  const {user, company} = await validateUserAndCompany(companyUserId);
  await validateJobSeeker(jobSeekerId);
  const requestFound = await RequestModel.findOne({_id: requestId, deleteStatus: false});
  if (!requestFound) {
    throw new NotFoundError(requestId + "Request not found");
  }
  await RequestModel.findOneAndUpdate({_id: requestId}, {
    company: company._id,
    jobSeeker: jobSeekerId,
    description: req.body.description,
    jobTitle: req.body.jobTitle
  });
  res.status(204).send();
});

/**
 * get request by id
 */
export const getRequest = tryCatch(async (req: Request, res: Response) => {
  const requestId = req.params.id;
  const requestFound = await RequestModel.findOne({_id: requestId, deleteStatus: false});
  if (!requestFound) {
    throw new NotFoundError(`${requestId} request not found!`);
  }
  const response: StandardResponse<any> = {
    statusCode: 200,
    msg: "OK",
    data: requestFound
  }
  res.status(200).send(response);
});

/**
 * delete request by id
 */
export const deleteRequest = tryCatch(async (req: Request, res: Response) => {
  const requestId = req.params.id;
  const requestFound = await RequestModel.findOne({_id: requestId, deleteStatus: false});
  if (!requestFound) {
    throw new NotFoundError(`${requestId} request not found!`);
  }
  RequestModel.findOneAndUpdate({_id: requestId}, {deleteStatus: true});
  res.status(204).send();
});

/**
 * get all request by logged in company
 */
export const getAllRequestByLoggedInCompany = tryCatch(async (req: Request, res: Response) => {
  const query: any = req.query;
  const page: number = query.page || 1;
  const size: number = query.size || 10;
// @ts-ignore
  const companyUserId = res.tokenData.user._id;
  const {user, company} = await validateUserAndCompany(companyUserId);
  const requestsByCompany = await RequestModel.find({
    company: company._id,
    deleteStatus: false
  }).populate({
    path: 'jobSeeker', populate: {
      path: 'user',
      select: 'fName lName email'
    }
  }).limit(size).skip(size * (page - 1));

  const response: StandardResponse<any> = {
    statusCode: 200,
    msg: "OK",
    data: requestsByCompany
  }
  res.status(200).send(response);
});

/**
 * get all request by  company
 */
export const getAllRequestByCompany = tryCatch(async (req: Request, res: Response) => {
  const query: any = req.query;
  const page: number = query.page || 1;
  const size: number = query.size || 10;
// @ts-ignore
  const companyUserId = req.params.id;
  const {user, company} = await validateUserAndCompany(companyUserId);
  const requestsByCompany = await RequestModel.find({
    company: company._id,
    deleteStatus: false
  }).limit(size).skip(size * (page - 1));
  const response: StandardResponse<any> = {
    statusCode: 200,
    msg: "OK",
    data: requestsByCompany
  }
  res.status(200).send(response);
});


/**
 * get all request by logged in job seeker
 */
export const getAllRequestByLoggedInJobSeeker = tryCatch(async (req: Request, res: Response) => {
  const query: any = req.query;
  const page: number = query.page || 1;
  const size: number = query.size || 10;
  // @ts-ignore
  const jobSeekerUserId = res.tokenData.user._id;
  const jobSeeker = await validateJobSeeker(jobSeekerUserId);
  const requestsByCompany = await RequestModel.find({
    jobSeeker: jobSeeker._id,
    deleteStatus: false
  }).limit(size).skip(size * (page - 1));
  const response: StandardResponse<any> = {
    statusCode: 200,
    msg: "OK",
    data: requestsByCompany
  }
  res.status(200).send(response);
});


