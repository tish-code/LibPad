import { userService } from "./users.service";
import express from "express";
export const UserRouter = express.Router();

UserRouter.post("/", async (req, res, next) => {
  try {
    const result = await userService.createUser(req.body);
    res.send(result);
    // res.send("hello");
  } catch (e) {
    next(e);
  }
});
