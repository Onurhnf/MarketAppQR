import express from "express";
import security from "../middleware/security.js";
import cartController from "../controller/cartController.js";

const cartRouter = express.Router();

cartRouter.post(
  "/create",
  security.protect,
  security.restrictTo("admin", "user"),
  cartController.createCart
);

cartRouter.post(
  "/:cartid/add",
  security.protect,
  security.restrictTo("admin", "user"),
  cartController.addItem
);

cartRouter.get(
  "/:id",
  security.protect,
  security.restrictTo("admin", "user"),
  cartController.getCart
);

cartRouter.get(
  "/",
  security.protect,
  security.restrictTo("admin"),
  cartController.getAllCart
);

cartRouter.post(
  "/:cartid/purchase",
  security.protect,
  security.restrictTo("admin", "user"),
  cartController.purchaseCart
);

cartRouter.post(
  "/:cartid/decline",
  security.protect,
  security.restrictTo("admin", "user"),
  cartController.declineCart
);

export default cartRouter;
