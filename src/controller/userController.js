import { User } from "../schema/userSchema.js";

const userController = {
  getAllUsers: (req, res) => {
    res.status(200).json({
      status: "success",
      data: "sa",
    });
  },
};

export default userController;
