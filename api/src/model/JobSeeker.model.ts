import {Schema, model} from "mongoose";
import {IJobSeeker} from "../types/SchemaTypes";


const jobSeekerSchema = new Schema<IJobSeeker>({
  category: {type: String, required: true},
  subCategory: {type: String, required: true},
  resume: {type: String, required: true},
  avatar: {type: String, required: true},
  gender: {type:String, required:true},
  jobSeekerContact: {type: String, required: true},
  user: {type: Schema.Types.ObjectId, required: true, ref: "User", unique:true},
  deleteStatus:{type:Boolean, default:false}
}, {timestamps: true});

const JobSeekerModel = model<IJobSeeker>("JobSeeker", jobSeekerSchema);
export default JobSeekerModel;

