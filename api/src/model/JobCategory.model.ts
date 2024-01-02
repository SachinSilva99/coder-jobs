import {Schema, model} from 'mongoose';
import {IJobCategory, ISubcategory} from "../types/SchemaTypes";


const subcategorySchema = new Schema<ISubcategory>({
  name: {type: String, required: true},
  category: {type: Schema.Types.ObjectId, required: true, ref: "Category"}
});

const categorySchema = new Schema<IJobCategory>({
  name: {type: String, required: true, unique: true},
});

const JobCategoryModel = model<IJobCategory>('JobCategory', categorySchema);
const SubJobCategoryModel = model<ISubcategory>('SubJobCategory', subcategorySchema);

export {IJobCategory, JobCategoryModel, SubJobCategoryModel};

