const multer = require("multer");
const { uuid } = require("uuidv4");

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, uuid() + "." + ext);
  },
});

const fileFilter = (req, file, cb) => {
  const isValid = !!MIME_TYPE_MAP[file.mimetype];
  let error = isValid ? null : new Error("Invalid mime type");
  cb(error, isValid);
};

const maxSize = 5 * 1024 * 1024; // for 5MB

const fileUpload = multer({
  limits: maxSize,
  storage: fileStorage,
  fileFilter: fileFilter,
});

module.exports = fileUpload;
