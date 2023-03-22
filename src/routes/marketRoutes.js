import express from "express";
import marketController from "../controller/marketController.js";
import marketStockController from "../controller/marketStockController.js";
import security from "../middleware/security.js";

const marketRouter = express.Router();

marketRouter.get(
  "/:marketid",
  security.protect,
  security.restrictTo("admin", "user"),
  marketController.getMarket
);

marketRouter.post(
  "/new",
  security.protect,
  security.restrictTo("admin"),
  marketController.newMarket
);

marketRouter.patch(
  "/addQRCode",
  security.protect,
  security.restrictTo("admin"),
  marketController.QRCodeImage
);

marketRouter.post(
  "/:marketid/addStock",
  security.protect,
  security.restrictTo("admin", "user"),
  marketStockController.newStock
);

export default marketRouter;
