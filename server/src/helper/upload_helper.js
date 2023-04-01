const bcrypt = require("bcrypt");
require("dotenv").config();

// routes bucket
const routes = {};

routes.upload_handler = async (req, res) => {
  try {
    res.status(200).json({
      status_text: "OK",
      message: "Upload Success",
    });
  } catch (err) {
    res.status(500).json({
      status_text: "Internal Server Error",
      message: err.message,
    });
  }
};

module.exports = routes;
