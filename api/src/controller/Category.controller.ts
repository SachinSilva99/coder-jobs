import {Request, Response} from "express";
import {JobCategoryModel} from "../model/JobCategory.model";
import {StandardResponse} from "../dto/StandardResponse";

export const createJobCategory = async (req: Request, res: Response, next: (e: any) => void) => {
  try {
    const category: any = req.body;
    const jobCategoryModel = new JobCategoryModel({name: category.name});
    const savedCategory = await jobCategoryModel.save();
    const response: StandardResponse<string> = {statusCode: 201, msg: "created successfully", data: savedCategory._id}
    res.status(201).send(response);
  } catch (er) {
    next(er);
  }
}

export const updateJobCategory = async (req: Request, res: Response, next: (e: any) => void) => {
  try {
    const category = req.params.category;
    const categoryName = req.body.name;
    const foundCategory = await JobCategoryModel.findOne({name: category});
    if (!foundCategory) {
      const response: StandardResponse<string> = {statusCode: 404, msg: category + " not found"}
      res.status(404).send(response);
      return;
    }
    await JobCategoryModel.findOneAndUpdate({_id: foundCategory._id}, {name: categoryName});
    res.status(204).send("OK");

  } catch (er) {
    next(er);
  }
}
export const getAllJobCategories = async (req: Request, res: Response, next: (e: any) => void) => {
  try {
    const categories = await JobCategoryModel.find();
    const response: StandardResponse<any> = {statusCode: 201, msg: "OK", data: categories}
    res.status(200).send(response);
  } catch (er) {
    next(er);
  }
}
