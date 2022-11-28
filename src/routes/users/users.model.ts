import { Schema, Model, model } from "mongoose";

export interface IUser {
  firstname: string;
  lastname: string;
  nick_name: string;
  created_at: Date;
  updated_at: Date;
}

const UserSchema = new Schema<IUser>({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  nick_name: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date },
});

export const UserModel: Model<IUser> = model<IUser>("users", UserSchema);
