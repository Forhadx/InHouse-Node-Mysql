const express = require("express");
const { body } = require("express-validator");

const productController = require("../controllers/Product/productController");
const fileUpload = require("../middleware/fileUrl");
const IsAuth = require("../middleware/is-auth");
const isAdmin = require("../middleware/is-admin");

const router = express.Router();

const validationRules = [
  body("name", "enter valid product name! length between 3 to 30")
    .isString()
    .trim()
    .isLength({ min: 3, max: 30 }),
  body("price", "enter valid product price! minimum price 10")
    .isNumeric()
    .trim()
    .isFloat({ min: 10 }),
  body("description", "enter valid product description! minimum length 10")
    .isString()
    .trim()
    .isLength({ min: 10 }),
];

// All PRODUCT ROUTES
// FETCH
router.get("/", IsAuth, productController.fetchProducts);

// ADD
router.post(
  "/",
  IsAuth,
  //   isAdmin,
  fileUpload.single("image"),
  validationRules,
  productController.addProduct
);

// UPDATE
router.patch(
  "/",
  IsAuth,
  isAdmin,
  fileUpload.single("image"),
  validationRules,
  productController.updateProduct
);

// ENABLE
router.patch("/enable/:pId", IsAuth, isAdmin, productController.enableProduct);

// DISABLE
router.patch("/disable/:pId", IsAuth, isAdmin, productController.disbleProduct);

// DELETE
router.delete("/:pId", IsAuth, isAdmin, productController.deleteProduct);

module.exports = router;
