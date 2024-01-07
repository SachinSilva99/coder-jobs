import { model, Schema } from 'mongoose';

const requestSchema = new Schema({
  company: { type: Schema.Types.ObjectId, required: true, ref: 'Company' },
  jobSeeker: { type: Schema.Types.ObjectId, required: true, ref: 'JobSeeker' },
  status: { type: String, enum: ['PENDING', 'ACCEPTED', 'REJECTED'], default: 'PENDING' },
}, { timestamps: true });

const RequestModel = model('Request', requestSchema);
export default RequestModel;
