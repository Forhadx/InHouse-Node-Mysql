const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const User = require("../../models/UserModel");

//==== USER SIGNUP ====
const userSignup = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ message: errors.array()[0].msg });
    }
    const { username, password, role } = req.body;
    const hashPw = await bcrypt.hash(password, 12);
    await User.create({
      username: username,
      password: hashPw,
      role: role,
    });
    res.status(201).json({ message: `User signup as ${role} successfully!` });
  } catch (err) {
    res.status(500).json({ message: "User couldn't signup! Try again." });
  }
};

module.exports = userSignup;
