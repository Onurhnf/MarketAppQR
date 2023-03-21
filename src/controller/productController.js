import { Product } from "../schema/productSchema.js";
import ErrorHandler from "../util/ErrorHandler.js";
import { HttpStatus } from "../util/Constants.js";
import { catchAsync } from "../util/Helpers.js";

const productController = {
  newProduct: catchAsync(async (req, res, next) => {
    const newProduct = await Product.create(req.body);

    res.status(HttpStatus.CREATED).json({
      status: "success",
      data: { newProduct },
    });
  }),
};

export default productController;
