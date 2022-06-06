const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelizeDb = require("./util/database");

const User = require("./models/UserModel");
const Product = require("./models/ProductModel");

sequelizeDb
  //   .sync()
  .sync({ force: true })
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const app = express();

app.use(express.json());
app.use(cors());

// ALL ROUTES

app.use((req, res, next) => {
  res.status(404).json({ message: "Couldn't found this page!" });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`SERVER START AT: ${PORT}`);
});
