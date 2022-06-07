const Product = require("../../models/ProductModel");

//===== FETCH PRODUCTS =====
const fetchProducts = async (req, res, next) => {
  const currentPage = req.query.page || 0;
  const PAGE_SIZE = 5;
  try {
    const products = await Product.findAndCountAll({
      where: { isEnable: true },
      limit: PAGE_SIZE,
      offset: PAGE_SIZE * (currentPage - 1),
    });
    if (!products) {
      res.status(500).json({ message: "Couldn't found products. Try again." });
    }
    res.status(200).json({
      message: "Fetch all products successfully.",
      products: products,
      currentPage: currentPage,
    });
  } catch (err) {
    res.status(500).json({ message: "Couldn't fetch products. Try again." });
  }
};

module.exports = fetchProducts;
