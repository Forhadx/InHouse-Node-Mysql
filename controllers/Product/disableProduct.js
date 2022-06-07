const Product = require("../../models/ProductModel");

//===== DISABLE PRODUCT =====
const disbleProduct = async (req, res, next) => {
  try {
    const pId = req.params.pId;

    let product = await Product.findByPk(pId);
    if (!product) {
      return res.status(404).res({ json: "Product couldn't found!" });
    }
    product.isEnable = false;
    await product.save();

    res.status(202).json({
      message: "Product disable successfully.",
      product: product,
    });
  } catch (err) {
    res.status(500).json({ message: "Couldn't disable products! Try again." });
  }
};

module.exports = disbleProduct;
