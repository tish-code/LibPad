import { UserModel } from "./../users/users.model";
import { IUser } from "./users.model";

class UserService {
  async createUser(body: IUser) {
    try {
      await UserModel.create(body);
      return { message: "user created successfully!" };
    } catch (e) {
      throw e;
    }
  }
}

export const userService = new UserService();
