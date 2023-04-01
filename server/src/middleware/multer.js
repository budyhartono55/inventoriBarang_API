const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    const timestamp = new Date().getTime();
    console.log(file);
    if (!file.originalname.match(/\.(jpg|png)$/)) {
      return cb(new Error("Hanya menerima file dengan ekstensi .jpg dan .png"));
    }
    const original_name = file.originalname;
    // const extension = path.extname(file.originalname);

    cb(null, `${timestamp}-${original_name}`);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 100000 }, // Maksimal ukuran file 100 KB
});

// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 10000, //3MB
//   },
// });

module.exports = upload;
