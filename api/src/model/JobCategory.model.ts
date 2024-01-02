import {Schema, model} from 'mongoose';
import {IJobCategory} from "../types/SchemaTypes";


const categorySchema = new Schema<IJobCategory>({
  name: {type: String, required: true, unique: true},
  subCategories: [{type: String, required: true, unique: true}],
});

export const JobCategoryModel = model<IJobCategory>('JobCategory', categorySchema);



