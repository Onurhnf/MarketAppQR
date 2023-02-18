/* eslint-disable no-console */
import dotenv from "dotenv";
import mongoose from "mongoose";
import validator from "validator";

import { app } from "./app.js";

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose.set("strictQuery", true);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log("Error connecting to database:", err));

const port = parseInt(process.env.PORT, 10);

app.listen(port, () => {
  console.log("App running on port", port);
});
