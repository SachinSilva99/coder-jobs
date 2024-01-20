import tryCatch from "../utils/TryCatch";
import {Request, Response} from "express";
import {IApplication, ICompany} from "../types/SchemaTypes";
import UserModel from "../model/User.model";
import {UserType} from "../enums/Enums";
import {StandardResponse} from "../dto/StandardResponse";
import {NotFoundError} from "../types/error/NotFoundError";
import JobSeekerModel from "../model/JobSeeker.model";
import ApplicationModel from "../model/Application.model";
import VacancyModel from "../model/Vacancy.model";
import {CompanyModel} from "../model/Company.model";

export const createApplication = tryCatch(async (req: Request, res: Response) => {
  console.log('here')
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
  const company = await CompanyModel.findOne({user: userId});
  const applications = await ApplicationModel.find({deleteStatus:false}).populate({
    path: 'vacancy',
    match: { company: company },
  }).populate({
    path: 'jobSeeker',
    select: 'avatar resume',
    populate:{
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
