import {Document, ObjectId} from "mongoose";

export interface ISubcategory extends Document {
  name: string;
}

export interface IJobCategory extends Document {
  name: string;
  subCategories: ISubcategory[];
}

export interface IUser extends Document {
  username: string,
  fName: string,
  lName: string,
  email: string,
  password: string
}

export interface IJobSeeker extends Document {
  category: ObjectId,
  subCategory: ObjectId,
  resume: string,
  avatar: string,
  jobSeekerContact: string,
  user: ObjectId
}

export interface ICompany extends Document {
  companyName: string,
  companyLogo: string,
  companySize: number,
  user: ObjectId
}

export interface IPackage extends Document {
  name: string,
  description: string,
  price: number,
}


export interface IOpportunity extends Document {
  company: ObjectId,
  jobSeeker: ObjectId,

}

export enum JobType {
  FULL_TIME = "FULL_TIME",
  PART_TIME = "PART_TIME",
  CONTRACT = "CONTRACT",
  INTERNSHIP = "INTERNSHIP",
}

export enum Modality {
  IN_SITE = "IN_SITE",
  REMOTE = "REMOTE",
  HYBRID = "HYBRID",
}

export interface IVacancy extends Document {
  company: ObjectId,
  jobTitle: string,
  category: ObjectId,
  subCategory: ObjectId,
  jobType: JobType,
  modality: Modality,
  salary?: number
}

export interface IPayment extends Document {
  company: ObjectId,
  paidDate: Date,
  status: string,
  paymentMethod: string,
  bankSlip: string,
  paidAmount: number
}

export interface ISubmission extends Document {
  vacancy: ObjectId,
  jobSeeker: ObjectId,
  status: string
}



