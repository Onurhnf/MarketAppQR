import express from "express";
import authController from "../controller/authController.js";
import userController from "../controller/userController.js";
import security from "../middleware/security.js";

const userRouter = express.Router();

userRouter
  .route("/")
  .get(
    security.protect,
    security.restrictTo("admin"),
    userController.getAllUsers
  );
userRouter.post("/signup", authController.signUp);
userRouter.post("/login", authController.login);

userRouter.patch(
  "/updateMyPassword",
  security.protect,
  authController.updateMyPassword
);

userRouter.patch("/updateMe", security.protect, userController.updateMe);
userRouter.delete("/deleteMe", security.protect, userController.deleteMe);

userRouter.post("/forgotPassword", authController.forgotPassword);
userRouter.patch("/resetPassword/:token", authController.resetPassword);

export default userRouter;
