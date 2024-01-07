import {model, Schema} from "mongoose";


const applicationSchema = new Schema({
  jobSeeker: { type: Schema.Types.ObjectId, required: true, ref: 'JobSeeker' },
  vacancy: { type: Schema.Types.ObjectId, required: true, ref: 'Vacancy' },
  status: { type: String, enum: ['PENDING', 'ACCEPTED', 'REJECTED'], default: 'PENDING' },
}, { timestamps: true });

const ApplicationModel = model('Application', applicationSchema);
export default ApplicationModel;

