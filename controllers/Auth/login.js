const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const User = require("../../models/UserModel");

//==== USER LOGIN ====
const userLogin = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ message: errors.array()[0].msg });
    }
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username: username } });
    if (!user) {
      return res.status(422).json({ message: "User not found!" });
    }
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      return res.status(409).json({ message: "User password not match!" });
    }
    const token = jwt.sign(
      {
        username: username,
        userId: user.id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "30d" }
    );
    res.status(200).json({
      message: "User login successfully",
      token: token,
      userId: user.id,
      expiresIn: "30d",
    });
  } catch (err) {
    res.status(500).json({ message: "User couldn't login! Try again." });
  }
};

module.exports = userLogin;
