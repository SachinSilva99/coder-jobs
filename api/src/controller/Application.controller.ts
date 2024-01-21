import tryCatch from "../utils/TryCatch";
import {Request, Response} from "express";
import {IApplication, ICompany} from "../types/SchemaTypes";
import UserModel from "../model/User.model";
import {UserType} from "../enums/Enums";
import {StandardResponse} from "../dto/StandardResponse";
import {NotFoundError} from "../types/error/NotFoundError";
import JobSeekerModel from "../model/JobSeeker.model";
import ApplicationModel from "../model/Application.model";
import {CompanyModel} from "../model/Company.model";

export const createApplication = tryCatch(async (req: Request, res: Response) => {
  const application: IApplication = req.body;
  // @ts-ignore
  const userId = res.tokenData.user._id;
  const user = await UserModel.findOne({
    _id: userId,
    deleteStatus: false,
    userType: UserType.JOB_SEEKER
  });
  if (!user) throw new NotFoundError("Invalid job-seeker user ID. Job Seeker user does not exist.");
  const jobSeeker = await JobSeekerModel.findOne({user: userId, deleteStatus: false});
  if (!jobSeeker) throw new NotFoundError(`${userId} job seeker not found!`);
  application.jobSeeker = jobSeeker._id;
  const applicationModel = new ApplicationModel(application);

  const savedApplication = await applicationModel.save();
  const response: StandardResponse<any> = {
    statusCode: 201,
    msg: "application created successfully",
    data: savedApplication._id
  }
  res.status(201).send(response);
});
export const getApplicationsOfLoggedCompany = tryCatch(async (req: Request, res: Response) => {

  // @ts-ignore
  const userId = res.tokenData.user._id;
  const user = await UserModel.findOne({
    _id: userId,
    deleteStatus: false,
    userType: UserType.COMPANY
  });
  if (!user) throw new NotFoundError("Invalid company user ID");
  const query: any = req.query;
  const page: number = query.page || 1;
  const size: number = query.size || 10;
  const company = await CompanyModel.findOne({user: userId});
  if (!company) throw new NotFoundError("Invalid company");
  const applications = await ApplicationModel.find({deleteStatus: false}).limit(size).skip(size * (page - 1)).populate({
    path: 'vacancy',
    match: {company: company},
  }).populate({
    path: 'jobSeeker',
    select: 'avatar resume jobSeekerContact',
    populate: {
      path: 'user',
      select: 'fName lName email'
    }
  });

  const response: StandardResponse<any> = {
    statusCode: 201,
    msg: "ok",
    data: applications
  }
  res.status(201).send(response);
});


export const getApplicationsOfCompany = tryCatch(async (req: Request, res: Response) => {
  const companyId = req.params.id;

  const query: any = req.query;
  const page: number = query.page || 1;
  const size: number = query.size || 10;
  const company = await CompanyModel.findOne({_id: companyId});
  if (!company) throw new NotFoundError("Invalid company");
  const applications = await ApplicationModel.find({deleteStatus: false}).limit(size).skip(size * (page - 1)).populate({
    path: 'vacancy',
    match: {company: company},
  }).populate({
    path: 'jobSeeker',
    select: 'avatar resume jobSeekerContact',
    populate: {
      path: 'user',
      select: 'fName lName email'
    }
  });
  const response: StandardResponse<any> = {
    statusCode: 201,
    msg: "ok",
    data: applications
  }
  res.status(201).send(response);
});

export const getAllApplications = tryCatch(async (req: Request, res: Response) => {
  const query: any = req.query;
  const page: number = query.page || 1;
  const size: number = query.size || 10;
  const applications = await ApplicationModel.find({deleteStatus: false}).limit(size).skip(size * (page - 1)).populate({
    path: 'vacancy',
  }).populate({
    path: 'jobSeeker',
    select: 'avatar resume jobSeekerContact',
    populate: {
      path: 'user',
      select: 'fName lName email'
    }
  });
  const response: StandardResponse<any> = {
    statusCode: 201,
    msg: "ok",
    data: applications
  }
  res.status(201).send(response);
});
export const getApplication = tryCatch(async (req: Request, res: Response) => {
  const applications = await ApplicationModel.findOne({_id: req.params.id, deleteStatus: false}).populate({
    path: 'vacancy',
  }).populate({
    path: 'jobSeeker',
    select: 'avatar resume jobSeekerContact',
    populate: {
      path: 'user',
      select: 'fName lName email'
    }
  });
  const response: StandardResponse<any> = {
    statusCode: 201,
    msg: "ok",
    data: applications
  }
  res.status(201).send(response);
});
