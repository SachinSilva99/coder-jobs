import tryCatch from "../utils/TryCatch";
import {Request, Response} from "express";
import {ICompanyPackage} from "../types/SchemaTypes";
import {CompanyPackageModel} from "../model/CompanyPackage.model";
import {StandardResponse} from "../dto/StandardResponse";

export const createCompanyPackage = tryCatch(async (req: Request, res: Response) => {
  const companyPackage: ICompanyPackage = req.body;
  const savedCompanyPackage = await new CompanyPackageModel(companyPackage).save();
  const response: StandardResponse<any> = {statusCode: 201, msg: "OK", data: savedCompanyPackage._id}
  res.status(201).send(response);
});

export const getCompanyPackage = tryCatch(async (req: Request, res: Response) => {
  const companyPackageId: string = req.params.id;
  const companyPackage = await CompanyPackageModel.findOne({_id: companyPackageId});
  if (!companyPackage) {
    res.status(404).send({statusCode: 404, msg: `${companyPackageId} Company Package not found!`});
    return;
  }
  const response: StandardResponse<any> = {statusCode: 200, msg: "OK", data: companyPackage}
  res.status(200).send(response);
});

export const updateCompanyPackage = tryCatch(async (req: Request, res: Response) => {
  const companyPackageId: string = req.params.id;
  const companyPackage: ICompanyPackage = req.body;
  const companyPackageFound = await CompanyPackageModel.findOne({_id: companyPackageId, deleteStatus:false});
  if (!companyPackageFound) {
    res.status(404).send({statusCode: 404, msg: `${companyPackageId} Company Package not found!`});
    return;
  }
  await CompanyPackageModel.findOneAndUpdate({_id: companyPackageId}, companyPackage)
  res.status(204).send();
});
export const deleteCompanyPackage = tryCatch(async (req: Request, res: Response) => {
  const companyPackageId: string = req.params.id;
  const companyPackageFound = await CompanyPackageModel.findOne({_id: companyPackageId, deleteStatus:false});
  if (!companyPackageFound) {
    res.status(404).send({statusCode: 404, msg: `${companyPackageId} Company Package not found!`});
    return;
  }
  await CompanyPackageModel.findOneAndUpdate({_id: companyPackageId}, {deleteStatus:true})
  res.status(204).send();
});

export const getAllCompanyPackage = tryCatch(async (req: Request, res: Response) => {
  const companyPackage = await CompanyPackageModel.find({deleteStatus:false});
  const response: StandardResponse<any> = {statusCode: 200, msg: "OK", data: companyPackage}
  res.status(200).send(response);
});