import { MarketStock } from "../schema/marketStockSchema.js";
import ErrorHandler from "../util/ErrorHandler.js";
import { HttpStatus } from "../util/Constants.js";
import { catchAsync } from "../util/Helpers.js";
import { Market } from "../schema/marketSchema.js";

const marketStockController = {
  newStock: catchAsync(async (req, res, next) => {
    const { marketid } = req.params;
    const stocks = req.body;

    if (!Array.isArray(stocks) || stocks.length <= 0) {
      return next(
        new ErrorHandler(
          "You must post a valid non-empty array",
          HttpStatus.NOT_FOUND
        )
      );
    }

    try {
      await Market.findById(marketid);
    } catch (error) {
      return next(
        new ErrorHandler(
          "There is no market with that id",
          HttpStatus.NOT_FOUND
        )
      );
    }

    const newStocks = stocks.map((stock) => ({
      marketid,
      productid: stock.productid,
      quantity: stock.quantity,
      price: stock.price,
    }));

    // insert the new stocks into the MarketStock collection
    const result = await MarketStock.insertMany(newStocks);

    res.status(HttpStatus.CREATED).json({
      status: "success",
      data: { stocks: result },
    });
  }),
};

export default marketStockController;
