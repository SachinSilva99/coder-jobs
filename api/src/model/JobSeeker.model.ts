import mongoose from "mongoose";

export interface IJobSeeker {
  contact: string;
  resume:string;
  preferredCategory:string;
}

const userSchema = new mongoose.Schema<IJobSeeker>({
  contact: {type: String, required: true},
  resume: {type: String, required: true},

}, {timestamps: true});

const JobSeekerModel = mongoose.model<IJobSeeker>("JobSeeker", userSchema);
export default JobSeekerModel;

