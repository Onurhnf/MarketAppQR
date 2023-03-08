import ErrorHandler from "../util/ErrorHandler.js";
import { User } from "../schema/userSchema.js";
import { HttpStatus } from "../util/Constants.js";
import { catchAsync, createToken } from "../util/Helpers.js";

const authController = {
  /**
   * Sign up
   */
  signUp: catchAsync(async (req, res, next) => {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });

    const token = createToken(newUser._id);
    res.status(HttpStatus.CREATED).json({
      status: "success",
      token,
      data: {
        user: newUser,
      },
    });
  }),

  /**
   * Login
   */
  login: catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password)
      return next(
        new ErrorHandler(
          "Please provide email and password",
          HttpStatus.BAD_REQUEST
        )
      );

    const user = await User.findOne({ email }).select("+password");

    //check if user exist then compare passwords
    if (!user || !(await user.comparePasswords(password, user.password))) {
      return next(
        new ErrorHandler(
          "Email or Password is incorrect",
          HttpStatus.UNAUTHORIZED
        )
      );
    }

    const token = createToken(user._id);
    res.status(HttpStatus.OK).json({
      status: "success",
      token,
    });
  }),
};

export default authController;
