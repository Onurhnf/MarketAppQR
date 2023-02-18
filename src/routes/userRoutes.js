import express from "express";
import authController from "../controller/authController.js";
import userController from "../controller/userController.js";

const userRouter = express.Router();

userRouter.post("/signup", authController.signUp);

userRouter.route("/").get(userController.getAllUsers);

export default userRouter;
