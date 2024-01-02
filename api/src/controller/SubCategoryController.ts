import {Request, Response} from "express";
import {JobCategoryModel, SubJobCategoryModel} from "../model/JobCategory.model";
import {StandardResponse} from "../dto/StandardResponse";

const categoryNotFoundResponse = (categoryName: string): StandardResponse<string> => {
  return {statusCode: 404, msg: `${categoryName} not found`};
};

const subCategoryNotFoundResponse = (subCategory: string): StandardResponse<string> => {
  return {statusCode: 404, msg: `${subCategory} not found`};
};

export const createSubJobCategory = async (req: Request, res: Response, next: (e: any) => void) => {
  try {
    const subCategory: any = req.body;
    const categoryName = req.query.category;
    const foundCategory = await JobCategoryModel.findOne({name: categoryName});

    if (!foundCategory) {
      const response: StandardResponse<string> = categoryNotFoundResponse(categoryName as string);
      res.status(404).send(response);
      return;
    }

    const subJobCategoryModel = new SubJobCategoryModel({name: subCategory.name, category: foundCategory._id});
    const savedSubCategory = await subJobCategoryModel.save();
    const response: StandardResponse<string> = {
      statusCode: 201,
      msg: "created successfully",
      data: savedSubCategory._id,
    };
    res.status(201).send(response);
  } catch (er) {
    next(er);
  }
};

export const updateSubJobCategory = async (req: Request, res: Response, next: (e: any) => void) => {
  try {
    const categoryName = req.query.category;
    const foundCategory = await JobCategoryModel.findOne({name: categoryName});

    if (!foundCategory) {
      const response: StandardResponse<string> = categoryNotFoundResponse(categoryName as string);
      res.status(404).send(response);
      return;
    }

    const subCategoryName = req.body.subCategoryName;
    const subCategoryFound =
      await SubJobCategoryModel.findOne({name: subCategoryName, category: foundCategory._id});
    if (!subCategoryFound) {
      const response: StandardResponse<string> = subCategoryNotFoundResponse(subCategoryName);
      res.status(404).send(response);
    }
  } catch (er) {
    next(er);
  }
};

export const getAllSubJobCategories = async (req: Request, res: Response, next: (e: any) => void) => {
  try {
    const subCategories = await SubJobCategoryModel.find();
    const response: StandardResponse<any> = {statusCode: 201, msg: "OK", data: subCategories};
    res.status(200).send(response);
  } catch (er) {
    next(er);
  }
};
