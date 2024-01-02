import {Request, Response} from "express";
import {IJobSeeker} from "../types/SchemaTypes";
import {StandardResponse} from "../dto/StandardResponse";
import JobSeekerModel from "../model/JobSeeker.model";

export const createJobSeeker = async (req: Request, res: Response, next: (e: any) => void) => {
  try {
    const jobSeeker: IJobSeeker = req.body;
    const jobSeekerModel = new JobSeekerModel(jobSeeker);
    const savedJobSeeker = await jobSeekerModel.save();
    const response: StandardResponse<string> = {
      statusCode: 201,
      msg: "job seeker created successfully",
      data: savedJobSeeker._id
    }
    res.status(201).send(response)
  } catch (e) {
    next(e);
  }
}
export const updateJobSeeker = async (req: Request, res: Response, next: (e: any) => void) => {
  try {
    const foundJobSeeker = await JobSeekerModel.findOne({_id: req.params.id, deleteStatus:false});
    if (!foundJobSeeker) {
      res.status(404).send({
        statusCode: 404,
        msg: `${req.params.id} job seeker not found`
      });
      return;
    }
    await JobSeekerModel.findOneAndUpdate({_id: req.params.id}, req.body);
    res.status(204).send();
  } catch (e) {
    next(e);
  }
}
export const getJobSeeker = async (req: Request, res: Response, next: (e: any) => void) => {
  try {

    const jobSeeker = await JobSeekerModel.findOne({_id: req.params.id, deleteStatus:false});
    if (!jobSeeker) {
      res.status(404).send({
        statusCode: 404,
        msg: `${req.params.id} job seeker not found`
      });
      return
    }
    const response: StandardResponse<any> = {
      statusCode: 200,
      msg: "OK",
      data: jobSeeker
    }
    res.status(201).send(response)
  } catch (e) {
    next(e);
  }
}
export const deleteJobSeeker = async (req: Request, res: Response, next: (e: any) => void) => {
  try {

    const jobSeeker = await JobSeekerModel.findOne({_id: req.params.id, deleteStatus:false});
    console.log(jobSeeker)
    if (!jobSeeker) {
      res.status(404).send({
        statusCode: 404,
        msg: `${req.params.id} job seeker not found`
      });
      return;
    }
    await JobSeekerModel.findOneAndUpdate({_id: req.params.id}, {deleteStatus: true});
    console.log("deleted")
    res.status(204).send();
  } catch (e) {
    next(e);
  }
}

export const getAllJobSeekers = async (req: Request, res: Response, next: (e: any) => void) => {
  try {
    const jobSeekers = await JobSeekerModel.find({deleteStatus: false});
    const response: StandardResponse<any> = {
      statusCode: 200,
      msg: "OK",
      data: jobSeekers
    }
    res.status(200).send(response);
  } catch (e) {
    next(e);
  }
}
