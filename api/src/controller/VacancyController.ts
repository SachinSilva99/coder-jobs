import tryCatch from "../utils/TryCatch";
import {Request, Response} from "express";
import {StandardResponse} from "../dto/StandardResponse";
import {IVacancy} from "../types/SchemaTypes";
import VacancyModel from "../model/Vacancy.model";

export const createVacancy = tryCatch(async (req: Request, res: Response) => {
  const vacancy: IVacancy = req.body;
  const vacancyModel = new VacancyModel(vacancy);
  const savedVacancy = await vacancyModel.save();
  const response: StandardResponse<string> = {statusCode: 201, msg: "created successfully", data: savedVacancy._id}
  res.status(201).send(response);
});