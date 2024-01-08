import tryCatch from "../utils/TryCatch";
import {RequestModel} from "../model/Request.model";
import {Request, Response} from "express";
import {StandardResponse} from "../dto/StandardResponse";
import {NotFoundError} from "../types/error/NotFound";
import JobSeekerModel from "../model/JobSeeker.model";
import UserModel from "../model/User.model";
import {UserType} from "../enums/Enums";
import {CompanyModel} from "../model/Company.model";

export const createRequest = tryCatch(async (req: Request, res: Response) => {
  console.log("here")
  // @ts-ignore
  const companyUserId = res.tokenData.user._id;

  // @ts-ignore
  const jobSeekerId = req.body.jobSeeker;
  const user = await UserModel.findOne({_id: companyUserId, deleteStatus: false, userType: UserType.COMPANY});
  if (!user) {
    throw new NotFoundError(companyUserId + " User not found");
  }
  const company = await CompanyModel.findOne({user: user._id, deleteStatus: false});
  if (!company) {
    throw new NotFoundError("Company not found");
  }
  const foundJobSeeker = await JobSeekerModel.findOne({_id: jobSeekerId, deleteStatus: false});
  if (!foundJobSeeker) {
    throw new NotFoundError(jobSeekerId + "Job Seeker not found");
  }
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
