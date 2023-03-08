import express from "express";
import morgan from "morgan";
import userRouter from "./routes/userRoutes.js";
import ErrorHandler from "./util/ErrorHandler.js";
import { ErrorCatcher } from "./controller/errorController.js";

export const app = express();
console.log("appjs.env", process.env.NODE_ENV);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  next(new ErrorHandler(`Cannot find ${req.originalUrl}`, 404));
});
app.use(ErrorCatcher);
