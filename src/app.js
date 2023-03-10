import express from "express";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import hpp from "hpp";

import userRouter from "./routes/userRoutes.js";
import ErrorHandler from "./util/ErrorHandler.js";
import { ErrorCatcher } from "./controller/errorController.js";

export const app = express();
console.log("appjs.env", process.env.NODE_ENV);

// ******* GLOBAL MIDDLEWARES *******

app.use(helmet());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many request. Try again later.",
});
app.use("/api", limiter);
app.use(express.json({ limit: "10kb" }));
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
// ******* ROUTES *******

app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  next(new ErrorHandler(`Cannot find ${req.originalUrl}`, 404));
});
app.use(ErrorCatcher);
