const Product = require("../../models/ProductModel");

//===== ENABLE PRODUCT =====
const enableProduct = async (req, res, next) => {
  try {
    const pId = req.params.pId;

    let product = await Product.findByPk(pId);
    if (!product) {
      return res.status(404).res({ json: "Product couldn't found!" });
    }
    product.isEnable = true;
    await product.save();

    res.status(202).json({
      message: "Product enable successfully.",
      product: product,
    });
  } catch (err) {
    res.status(500).json({ message: "Couldn't enable products! Try again." });
  }
};

module.exports = enableProduct;
