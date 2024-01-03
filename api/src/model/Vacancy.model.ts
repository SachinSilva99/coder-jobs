import {model, Schema} from "mongoose";
import {IVacancy} from "../types/SchemaTypes";
import {JobType, Modality} from "../enums/Enums";

const vacancySchema = new Schema<IVacancy>({
  company: {type: Schema.Types.ObjectId, required: true, ref: "Company"},
  jobTitle: {type: String, required: true, minlength: 5},
  category: {type: String, required: true},
  subCategory: {type: String, required: true},
  jobType: {type: String, enum: JobType, required: true},
  modality: {type: String, enum: Modality, required: true},
  salary: {type: Number},
}, {timestamps: true});
const VacancyModel = model("Vacancy", vacancySchema);
export default VacancyModel;