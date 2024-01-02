import {Request, Response} from "express";
import {IJobCategory, ISubcategory} from "../types/SchemaTypes";
import {JobCategoryModel, SubJobCategoryModel} from "../model/JobCategory.model";
import {StandardResponse} from "../dto/StandardResponse";

export const createJobCategory = async (req: Request, res: Response, next: (e: any) => void) => {
  try {
    const category: IJobCategory = req.body;
    const jobCategoryModel = new JobCategoryModel(category);
    const savedCategory = await jobCategoryModel.save();
    const savedSubCategories: any[] = []
    for (const subCategory of category.subCategories) {
      const subJobCategoryModel = new SubJobCategoryModel(subCategory);
      const savedSubCategory = await subJobCategoryModel.save();
      savedSubCategories.push(savedSubCategory);
    }
    await JobCategoryModel.findOneAndUpdate({_id: savedCategory._id, subCategories: savedSubCategories});
    const response: StandardResponse<string> = {statusCode: 201, msg: "created successfully", data: savedCategory._id}
    res.status(201).send(response);
  } catch (er) {
    next(er);
  }
}