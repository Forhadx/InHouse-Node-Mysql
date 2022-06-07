const path = require("path");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelizeDb = require("./util/database");
const User = require("./models/UserModel");
const Product = require("./models/ProductModel");
const authRoutes = require("./routes/authRoutes");
const productRoues = require("./routes/productRoutes");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join("uploads")));

// ALL ROUTES
app.use("/api/user", authRoutes);
app.use("/api/product", productRoues);
app.use((req, res, next) => {
  res.status(404).json({ message: "Couldn't found this page!" });
});

const PORT = process.env.PORT;

//ASSOCIATIONS
Product.belongsTo(User);
User.hasMany(Product);

sequelizeDb
  .sync()
  // .sync({ force: true })
  .then(() => {
    app.listen(PORT);
    console.log(`SERVER START AT: ${PORT}`);
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
