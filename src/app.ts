import createError from "http-errors";
import express, { NextFunction, Response, Request } from "express";
import path from "path";
import cookieParser from "cookie-parser";

import { IndexRouter } from "./routes/index";
import { UserRouter } from "./routes/users";

export const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", IndexRouter);
app.use("/users", UserRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  // render the error page
  res.status(err.status || 500);
  res.send({ message: err.message });
});
