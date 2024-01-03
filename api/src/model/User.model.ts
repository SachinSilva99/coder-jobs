import {IUser} from "../types/SchemaTypes";
import {model, Schema} from "mongoose";
import {UserType} from "../enums/Enums";

const userSchema = new Schema<IUser>({
  username: {type: String, required: true, unique: true},
  fName: {type: String, required: true},
  lName: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  userType: {type: String, enum: UserType, required: true},
  deleteStatus: {type: Boolean, default: false}
}, {timestamps: true});

const userModel = model<IUser>("User", userSchema);
export default userModel;

