import {Request, Response} from "express";
import {JobCategoryModel} from "../model/JobCategory.model";
import {StandardResponse} from "../dto/StandardResponse";
import tryCatch from "../utils/TryCatch";

export const createJobCategory = tryCatch(async (req: Request, res: Response, next: (e: any) => void) => {
  const category: any = req.body;
  const jobCategoryModel = new JobCategoryModel(category);
  const savedCategory = await jobCategoryModel.save();
  const response: StandardResponse<string> = {statusCode: 201, msg: "created successfully", data: savedCategory._id}
  res.status(201).send(response);
});

export const updateJobCategory = tryCatch(async (req: Request, res: Response, next: (e: any) => void) => {
  const categoryName = req.params.category;
  const category = req.body;
  const foundCategory = await JobCategoryModel.findOne({name: categoryName});
  if (!foundCategory) {
    const response: StandardResponse<string> = {statusCode: 404, msg: category + " not found"}
    res.status(404).send(response);
    return;
  }
  await JobCategoryModel.findOneAndUpdate({_id: foundCategory._id}, category);
  res.status(204).send("OK");
});

export const getAllJobCategories = tryCatch(async (req: Request, res: Response, next: (e: any) => void) => {
  const categories = await JobCategoryModel.find();
  const response: StandardResponse<any> = {statusCode: 201, msg: "OK", data: categories}
  res.status(200).send(response);
});

export const getCategory = tryCatch(async (req: Request, res: Response, next: (e: any) => void) => {
  const category = req.params.category;
  const categories = await JobCategoryModel.find({name: category});
  const response: StandardResponse<any> = {statusCode: 200, msg: "OK", data: categories}
  res.status(200).send(response);
});
