import mongoose from "mongoose";

export interface IUser {
  username: string,
  fName: string,
  lName: string,
  email: string,
  password: string
}

const userSchema = new mongoose.Schema<IUser>({
  username: {type: String, required: true, unique: true},
  fName: {type: String, required: true},
  lName: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
}, {timestamps: true});

const userModel = mongoose.model<IUser>("user", userSchema);
export default userModel;

