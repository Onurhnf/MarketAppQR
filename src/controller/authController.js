import { User } from "../schema/userSchema.js";
import { HttpStatus } from "../util/Constants.js";
import { Helpers } from "../util/Helpers.js";

const authController = {
  signUp: Helpers.catchAsync(async (req, res, next) => {
    const newUser = await User.create(req.body);

    res.status(HttpStatus.CREATED).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  }),
};

export default authController;
