const path = require("path");
const fs = require("fs");

const clearImage = (ImgPath) => {
  ImgPath = path.join(__dirname, "..", ImgPath);
  fs.unlink(ImgPath, (err) => {
    console.log("Delete done! ", err);
  });
};

module.exports = clearImage;
