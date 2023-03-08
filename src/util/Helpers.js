import Jwt from "jsonwebtoken";

// checkID function
export const checkID = (req, res, next, val) => {
  //TODO handle check id
  if (req.params.id) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
  next();
};

// catchAsync function
export const catchAsync = (fn) => (req, res, next) => {
  fn(req, res, next).catch(next);
};

export const createToken = (id) => {
  const token = Jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

export const getTokenFromRequest = (req) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    return authHeader.split(" ")[1];
  }
  // return req.cookies.jwt;
};
