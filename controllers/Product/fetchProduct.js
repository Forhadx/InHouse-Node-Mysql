const Product = require("../../models/ProductModel");

//===== FETCH PRODUCTS =====
const fetchProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll({ where: { isEnable: true } });
    if (!products) {
      res.status(500).json({ message: "Couldn't found products. Try again." });
    }
    res.status(200).json({
      message: "Fetch all products successfully.",
      products: products,
    });
  } catch (err) {
    res.status(500).json({ message: "Couldn't fetch products. Try again." });
  }
};

module.exports = fetchProducts;
