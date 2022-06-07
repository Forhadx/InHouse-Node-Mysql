const express = require("express");
const { body } = require("express-validator");

const AuthController = require("../controllers/Auth/authControllers");
const User = require("../models/UserModel");

const router = express.Router();

// SIGNUP USER
router.post(
  "/signup",
  [
    body("username", "enter a valid username!")
      .trim()
      .isString()
      .isLength({ min: 6, max: 12 })
      .custom((value, { req }) => {
        return User.findOne({ where: { username: value } }).then((user) => {
          if (user) {
            return Promise.reject("username already exist!");
          }
        });
      }),
    body("password", "password is required!")
      .trim()
      .isLength({ min: 6, max: 32 }),
    body("role", "enter your role!").trim().notEmpty().isString(),
  ],
  AuthController.userSignup
);

// LOGIN USER
router.post(
  "/login",
  [
    body("username", "enter a valid username!")
      .trim()
      .isString()
      .isLength({ min: 6, max: 12 }),
  ],
  AuthController.userLogin
);

module.exports = router;
