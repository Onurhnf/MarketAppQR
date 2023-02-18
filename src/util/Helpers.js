export const Helpers = {
  checkID: (req, res, next, val) => {
    console.log(`Tour id is: ${val}`);
    //TODO handle check id
    if (req.params.id) {
      return res.status(404).json({
        status: "fail",
        message: "Invalid ID",
      });
    }
    next();
  },
};
