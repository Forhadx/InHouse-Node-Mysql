const { validationResult } = require("express-validator");
const Product = require("../../models/ProductModel");

//===== CREATE PRODUCT =====
const addProduct = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ message: errors.array()[0].msg });
    }
    const { name, price, description } = req.body;
    if (!req.file) {
      return res.status(404).res({ json: "Product image not found!" });
    }
    let imagePath = "";
    imagePath = req.file.path.replace(/\\/g, "/");
    const product = await req.user.createProduct({
      name,
      price,
      description,
      image: imagePath,
    });
    res.status(201).json({
      message: "Added new product successfully.",
      product: product,
    });
  } catch (err) {
    res.status(500).json({ message: "Couldn't add product! Try again." });
  }
};

module.exports = addProduct;
