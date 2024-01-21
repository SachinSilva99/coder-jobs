import {model, Schema} from "mongoose";
import {IApplication} from "../types/SchemaTypes";
import {Status} from "../enums/Enums";


const applicationSchema = new Schema<IApplication>({
  jobSeeker: {type: Schema.Types.ObjectId, required: true, ref: 'JobSeeker'},
  vacancy: {type: Schema.Types.ObjectId, required: true, ref: 'Vacancy'},
  coverLetter: {type: String, required: true},
  status: {type: String, enum: Status, default:Status.PENDING},
  view: {type: Boolean, default: false},
  deleteStatus: {type: Boolean, default: false}
}, {timestamps: true});

const ApplicationModel = model<IApplication>('Application', applicationSchema);
export default ApplicationModel;

