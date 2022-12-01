import createError from "http-errors";
import express, { NextFunction, Response, Request } from "express";
import path from "path";
import { debug } from "www";
import { useDataBase } from "libs/db";
import { UserRouter } from "routes/users/users.controller";

export const app = express();

// connect to db
useDataBase()
  .then(() => {
    debug("Database connected successfully");
  })
  .catch((err) => {
    debug(err);
    debug("error connecting to db!");
  });

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", UserRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500);
  res.send({ message: err.message });
});
