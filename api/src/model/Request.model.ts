import {model, Schema} from 'mongoose';
import {IRequest} from "../types/SchemaTypes";
import {Status} from "../enums/Enums";

const requestSchema = new Schema<IRequest>({
  company: {type: Schema.Types.ObjectId, required: true, ref: 'Company'},
  jobSeeker: {type: Schema.Types.ObjectId, required: true, ref: 'JobSeeker'},
  jobTitle:{type:String, required:true},
  description:{type:String, required:true},
  salary:{type:Number},
  status: {type: String, enum: Status, default: Status.PENDING},
  view: {type: Boolean, default: false},
  deleteStatus: {type: Boolean, default: false},
}, {timestamps: true});

export const RequestModel = model<IRequest>('Request', requestSchema);

