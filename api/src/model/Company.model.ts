import {Schema, model} from 'mongoose';
import {ICompany} from "../types/SchemaTypes";


const companySchema = new Schema<ICompany>({
  companyLogo: {type: String, required: true},
  companyName: {type: String, required: true},
  companySize: {type: Number, required: true},
  preferredPackage: {type: Schema.Types.ObjectId, required: true, ref: "CompanyPackage"},
  user: {type: Schema.Types.ObjectId, ref: "User"},
  deleteStatus: {type: Boolean, default: false}
}, {timestamps: true});

export const CompanyModel = model<ICompany>('Company', companySchema);