const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(422).json({ message: "User is not admin!" });
  }
  return next();
};

module.exports = isAdmin;
