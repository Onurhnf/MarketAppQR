import express from "express";
import marketStockController from "../controller/marketStockController.js";
import security from "../middleware/security.js";

const marketStockRouter = express.Router();

// marketStockRouter.post(
//   "/:marketid/addStock",
//   security.protect,
//   security.restrictTo("admin", "user"),
//   marketStockController.newStock
// );

export default marketStockRouter;
