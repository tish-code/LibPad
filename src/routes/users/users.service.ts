import { hashPassword } from "libs/auth/password";
import { createAccessToken } from "libs/auth/token";
import { UserModel } from "./../users/users.model";
import { IUser } from "./users.model";

class UserService {
  async userSignUp(body: IUser) {
    try {
      const { password } = body;
      console.log(password);
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
}

export const userService = new UserService();
