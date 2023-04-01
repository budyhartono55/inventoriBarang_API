// import express
const express = require("express");
const { get_allProducts, add_product, update_product, delete_product, upload_imageProduct } = require("../controllers/product_controllers"); //import path
const upload = require("../middleware/multer");
const { upload_handler } = require("../helper/upload_helper");

const router = express.Router(); //router function

// execute
// POST =========CREATE============
router.post("/product/add", add_product);
router.post("/product/upload/image", upload.single("photo"), upload_handler);

// GET ==========READ============
router.get("/product/get_all", get_allProducts);

//PUT ==========UPDATE============
router.put("/product/update/:id_product", update_product);

// DELETE ========= DELETE =========
router.delete("/product/delete/:id_product", delete_product);

// export route ====================
module.exports = router;
