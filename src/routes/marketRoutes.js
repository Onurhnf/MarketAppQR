import express from "express";
import marketController from "../controller/marketController.js";
import marketStockController from "../controller/marketStockController.js";
import security from "../middleware/security.js";

const marketRouter = express.Router();

marketRouter.get(
  "/:id",
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
marketRouter.get(
  "/",
  security.protect,
  security.restrictTo("admin"),
  marketController.getAll
);

// Market Stock
marketRouter.post(
  "/:marketid/newStock",
  security.protect,
  security.restrictTo("admin"),
  marketStockController.newStock
);

marketRouter.patch(
  "/:marketid/updateStock",
  security.protect,
  security.restrictTo("admin"),
  marketStockController.updateStock
);

marketRouter.delete(
  "/:marketid/deleteStock/:productid",
  security.protect,
  security.restrictTo("admin"),
  marketStockController.deleteStock
);

export default marketRouter;
