const User = require("../models/UserModel");

const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers["authorization"];

  if (!token) {
    return res.status(403).send("A token is required for a authentication");
  }

  try {
    token = token.replace(/^Bearer\s+/, "");
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findByPk(decoded.userId);
    if (!user) {
      return res.status(422).json({ message: "Unauthoraize token!" });
    }
    req.user = user;
  } catch (err) {
    return res.json(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
