import express from "express";
import marketController from "../controller/marketController.js";
import security from "../middleware/security.js";

const marketRouter = express.Router();

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

export default marketRouter;
