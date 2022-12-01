import { userService } from "./users.service";
import express from "express";
export const UserRouter = express.Router();

UserRouter.post("/sign-up", async (req, res, next) => {
  try {
    const result = await userService.userSignUp(req.body);
    res.send(result);
  } catch (e) {
    next(e);
  }
});

UserRouter.post("/login", async (req, res, next) => {
  try {
    let { password, username } = req.body;
    const result = await userService.UserLogin(username, password);
    res.send(result);
  } catch (e) {
    next(e);
  }
});
