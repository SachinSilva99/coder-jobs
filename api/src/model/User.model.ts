import {IUser} from "../types/SchemaTypes";
import {model, Schema} from "mongoose";

const userSchema = new Schema<IUser>({
  username: {type: String, required: true, unique: true},
  fName: {type: String, required: true},
  lName: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
}, {timestamps: true});

const userModel = model<IUser>("User", userSchema);
export default userModel;

