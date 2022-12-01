import { hashPassword, verifyPassword } from "libs/auth/password";
import { createAccessToken } from "libs/auth/token";
import { UserModel } from "./../users/users.model";
import { IUser } from "./users.model";

class UserService {
  async userSignUp(body: IUser) {
    try {
      const { password, email } = body;
      const isUser = await UserModel.findOne({ email });
      if (isUser) throw new Error("email already exist");
      const hashedPassword = await hashPassword(password);
      const newUser = await UserModel.create({
        ...body,
        password: hashedPassword,
      });
      const token = createAccessToken(newUser._id);
      return { token };
    } catch (e) {
      throw e;
    }
  }

  async UserLogin(username: string, password: string) {
    try {
      const isUser = await UserModel.findOne({
        username: { $regex: `^${username}$`, $options: "i" },
      });
      if (!isUser) throw new Error("incorrect username");
      const isPasswordCorrect = await verifyPassword(
        password,
        isUser?.password
      );
      if (!isPasswordCorrect) throw new Error("incorrect password");
      const token = createAccessToken(isUser?._id);
      return { token };
    } catch (e) {
      throw e;
    }
  }
}

export const userService = new UserService();
