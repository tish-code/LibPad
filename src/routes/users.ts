import express from "express";
export const UserRouter = express.Router();

/* GET users listing. */
UserRouter.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
