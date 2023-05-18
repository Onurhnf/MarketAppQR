import express from "express";
import productController from "../controller/productController.js";
import security from "../middleware/security.js";

const productRouter = express.Router();

productRouter.post(
  "/new",
  security.protect,
  security.restrictTo("admin"),
  productController.newProduct
);

productRouter.get(
  "/",
  security.protect,
  security.restrictTo("admin"),
  productController.getAll
);

export default productRouter;
