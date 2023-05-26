import { Product } from "../schema/productSchema.js";
import { createOne, getAll, getOne } from "./crudFactoryController.js";

const productController = {
  newProduct: createOne(Product),
  getAll: getAll(Product),
  getOne: getOne(Product),
};

export default productController;
