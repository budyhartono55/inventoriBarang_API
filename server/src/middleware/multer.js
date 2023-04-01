const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    const timestamp = new Date().getTime();
    console.log(file);
    const original_name = file.originalname;
    // const extension = path.extname(file.originalname);

    cb(null, `${timestamp}-${original_name}`);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 3 * 1000 * 10000, //3MB
  },
});

module.exports = upload;
