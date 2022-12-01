import { Schema, Model, model } from "mongoose";

export interface IUser {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

const UserSchema = new Schema<IUser>({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

export const UserModel: Model<IUser> = model<IUser>("users", UserSchema);
