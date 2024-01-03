import {Schema, model} from 'mongoose';
import {ICompanyPackage} from "../types/SchemaTypes";
import {PaymentMethod} from "../enums/Enums";


const companyPackageSchema = new Schema<ICompanyPackage>({
  name: {type: String, required: true, unique: true},
  description: {type: String, required: true},
  price: {type: Number, required: true},
  paymentMethod: {type: String, enum: PaymentMethod, required: true},
  deleteStatus:{type:Boolean, default:false}
}, {timestamps: true});

export const CompanyPackageModel = model<ICompanyPackage>('CompanyPackage', companyPackageSchema);