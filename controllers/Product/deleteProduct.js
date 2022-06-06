const clearImage = require("../../util/delete-file");
const Product = require("../../models/ProductModel");

//===== DELETE PRODUCT =====
const deleteProduct = async (req, res, next) => {
  try {
    const pId = req.params.pId;
    let product = await Product.findByPk(pId);
    if (!product) {
      return res.status(422).res({ json: "Product couldn't found!" });
    }
    clearImage(product.image);
    await Product.destroy({ where: { id: pId } });
    res.status(201).json({ message: "Product deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: "Couldn't delete products! Try again." });
  }
};

module.exports = deleteProduct;
