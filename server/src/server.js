// IMPORT ======================
const express = require("express"); // import express
const dotenv = require("dotenv"); // import dotenv
const dotenv_config = dotenv.config();
const cors = require("cors"); // import cors for logger (morgan)
const req_log = require("./middleware/logs"); // import Middleware log

// FUNCTIONS ===================
const app = express(); // express function

// PARSING ====================
app.use(express.json()); //  JSON Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

//MIDDLEWARE =================
app.use(req_log);
app.use("/assets", express.static("public/images"));

// GROUPING ROUTES ======================
// import routes
const user_routes = require("./routes/user_routes"); // user
const product_routes = require("./routes/product_routes");

// API format ====================
app.use("/api/test_nutech", user_routes, product_routes);

// default TEST ====================
app.get("/", (req, res) => {
  res.status(200).json({
    status_text: "OK",
    message: "Yeaay!, your connected with nutech Inventories API",
  });
});

// handler wrong routes ==================
app.all("*", (req, res) => {
  res.status(404).json({
    status_text: "Not Found",
    message: "Sorry this route does not exist, please check your route and try again",
  });
});

// ENV collection
const PORT = process.env.PORT;

// ERROR Handling
app.use((err, req, res, next) => {
  res.status(200).json({
    message: err.message,
  });
});

// LISTEN ME =======================
app.listen(5050, () => {
  console.log(`Server Running on PORT PM2`);
});
