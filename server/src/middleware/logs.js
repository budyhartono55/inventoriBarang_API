const req_log = (req, res, next) => {
  console.log("Aktifitas terdeteksi di path", req.path);
  next(); // to routes
};

module.exports = req_log;
