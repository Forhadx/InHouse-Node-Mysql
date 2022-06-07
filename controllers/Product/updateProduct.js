const { validationResult } = require("express-validator");
const clearImage = require("../../util/delete-file");
const Product = require("../../models/ProductModel");

//===== UPDATE PRODUCT =====
const updateProduct = async (req, res, next) => {
  try {
    const { id, name, price, description, image } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ message: errors.array()[0].msg });
    }
    let product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).res({ json: "Product couldn't found!" });
    }
    let imagePath = image;
    if (req.file) {
      clearImage(product.image);
      imagePath = req.file.path.replace(/\\/g, "/");
    }
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = imagePath;
    await product.save();
    res.status(202).json({
      message: "Updated product successfully.",
      product: product,
    });
  } catch (err) {
    res.status(500).json({ message: "Couldn't update products! Try again." });
  }
};

module.exports = updateProduct;
