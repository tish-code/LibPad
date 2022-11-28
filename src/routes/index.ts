import express from "express";
export const IndexRouter = express.Router();

/* GET home page. */
IndexRouter.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
