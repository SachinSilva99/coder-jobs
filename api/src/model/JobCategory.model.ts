import {Schema, model} from 'mongoose';
import {IJobCategory, ISubcategory} from "../types/SchemaTypes";


export const subcategorySchema = new Schema<ISubcategory>({
  name: {type: String, required: true},
});


const categorySchema = new Schema<IJobCategory>({
  name: {type: String, required: true, unique: true},
  subCategories: {
    type: [subcategorySchema], required: true,
  },
});

const JobCategoryModel = model<IJobCategory>('JobCategory', categorySchema);
const SubJobCategoryModel = model<ISubcategory>('SubJobCategory', subcategorySchema);

export {IJobCategory, JobCategoryModel, SubJobCategoryModel};

