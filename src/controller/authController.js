import { User } from "../schema/userSchema.js";
import { HttpStatus } from "../util/Constants.js";

const authController = {
  signUp: async (req, res, next) => {
    try {
      const newUser = await User.create(req.body);

      res.status(HttpStatus.CREATED).json({
        status: "success",
        data: {
          user: newUser,
        },
      });
    } catch (error) {
      res.status(500).json({ sa: "sa" });
      console.log(error);
    }
  },
};

export default authController;
