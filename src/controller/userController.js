import { catchAsync } from "../util/Helpers.js";
import { User } from "../schema/userSchema.js";
import { HttpStatus } from "../util/Constants.js";

const userController = {
  getAllUsers: catchAsync(async (req, res, next) => {
    const users = await User.find();

    res.status(HttpStatus.OK).json({
      status: "success",
      results: users.length,
      data: { users },
    });
  }),
};

export default userController;
