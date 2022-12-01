import jwt from "jsonwebtoken";
import { Types } from "mongoose";
export function createAccessToken(userId: string | Types.ObjectId) {
  return jwt.sign({ userId }, process.env.TOKEN_SECRET || "tokensecret", {
    expiresIn: "12h",
  });
}
