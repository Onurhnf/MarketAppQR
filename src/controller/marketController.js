import { catchAsync } from "../util/Helpers.js";
import { Market } from "../schema/marketSchema.js";
import { HttpStatus } from "../util/Constants.js";
import ErrorHandler from "../util/ErrorHandler.js";

const marketController = {
  newMarket: catchAsync(async (req, res, next) => {
    const newMarket = await Market.create({
      name: req.body.name,
      adress: req.body.adress,
    });

    res.status(HttpStatus.CREATED).json({
      status: "success",
      data: { newMarket },
    });
  }),
  QRCodeImage: catchAsync(async (req, res, next) => {
    const { id, QRCodeImage } = req.body;
    if (!id || !QRCodeImage) {
      return next(
        new ErrorHandler(
          "Market Id and QR Code Image URL is Required",
          HttpStatus.BAD_REQUEST
        )
      );
    }
    try {
      const market = await Market.findById(id);

      market.QRCodeImage = QRCodeImage;
      market.save();

      res.status(HttpStatus.OK).json({
        status: "success",
        data: { market },
      });
    } catch (err) {
      if (err.name === "CastError" && err.kind === "ObjectId") {
        next(
          new ErrorHandler(
            "No market found for this id",
            HttpStatus.BAD_REQUEST
          )
        );
      } else {
        next(new ErrorHandler(err.message, HttpStatus.INTERNAL_SERVER_ERROR));
      }
    }
  }),
  getMarket: catchAsync(async (req, res, next) => {
    const { marketid } = req.params;
    const market = await Market.findById(marketid);

    res.status(HttpStatus.OK).json({
      status: "success",
      data: { market },
    });
  }),
};

export default marketController;
