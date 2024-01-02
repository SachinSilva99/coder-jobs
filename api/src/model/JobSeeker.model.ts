import {Schema, model} from "mongoose";
import {IJobSeeker} from "../types/SchemaTypes";


const jobSeekerSchema = new Schema<IJobSeeker>({
  category: {type: Schema.Types.ObjectId, required: true, ref: "Category"},
  subCategory: {type: Schema.Types.ObjectId, required: true, ref: "SubCategory"},
  resume: {type: String, required: true},
  avatar: {type: String, required: true},
  jobSeekerContact: {type: String, required: true},
  user: {type: Schema.Types.ObjectId, required: true, ref: "User"}
}, {timestamps: true});

const JobSeekerModel = model<IJobSeeker>("JobSeeker", jobSeekerSchema);
export default JobSeekerModel;

