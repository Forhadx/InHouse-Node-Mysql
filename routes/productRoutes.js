const express = require("express");
const { body } = require("express-validator");

const productController = require("../controllers/Product/productController");
const fileUpload = require("../middleware/fileUrl");

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
router.get("/", productController.fetchProducts);

// ADD
router.post(
  "/",
  fileUpload.single("image"),
  validationRules,
  productController.addProduct
);

// UPDATE
router.patch(
  "/",
  fileUpload.single("image"),
  validationRules,
  productController.updateProduct
);

// ENABLE
router.patch("/enable/:pId", productController.enableProduct);

// DISABLE
router.patch("/disable/:pId", productController.disbleProduct);

// DELETE
router.delete("/:pId", productController.deleteProduct);

module.exports = router;
