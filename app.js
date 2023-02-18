import express from "express";
import morgan from "morgan";
import userRouter from "./src/routes/userRoutes.js";

export const app = express();
console.log("appjs.env", process.env.NODE_ENV);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.use("/api/v1/users", userRouter);
