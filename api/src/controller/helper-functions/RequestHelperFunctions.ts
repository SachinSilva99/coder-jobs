/**
 * Helper functions
 *
 */
import UserModel from "../../model/User.model";
import {UserType} from "../../enums/Enums";
import {NotFoundError} from "../../types/error/NotFoundError";
import {CompanyModel} from "../../model/Company.model";
import JobSeekerModel from "../../model/JobSeeker.model";


export async function validateUserAndCompany(companyUserId: string): Promise<{ user: any, company: any }> {
  const user = await UserModel.findOne({
    _id: companyUserId,
    deleteStatus: false,
    userType: UserType.COMPANY
  });

  if (!user) {
    throw new NotFoundError(companyUserId + " User not found");
  }

  const company = await CompanyModel.findOne({ user: user._id, deleteStatus: false });

  if (!company) {
    throw new NotFoundError("Company not found");
  }

  return { user, company };
}

export async function validateJobSeeker(jobSeekerId: string) {
  const foundJobSeeker = await JobSeekerModel.findOne({ _id: jobSeekerId, deleteStatus: false });
  if (!foundJobSeeker) {
    throw new NotFoundError(jobSeekerId + "Job Seeker not found");
  }
  return foundJobSeeker;
}
