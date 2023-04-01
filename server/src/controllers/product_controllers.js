const bcrypt = require("bcrypt");
require("dotenv").config();
const { query_get_allProducts, query_addProduct, query_updateProduct, query_deleteProduct } = require("../models/product_models");

// routes bucket
const routes = {};

// routes collections ==================
//register
const pool = require("../config/database");

routes.add_product = async (req, res) => {
  const { body } = req;

  try {
    const [rows] = await pool.query("SELECT * FROM products WHERE nama_barang = ?", [body.nama_barang]);

    if (rows.length > 0) {
      return res.status(400).json({
        status_text: "Bad Request",
        message: "Nama Barang yang anda masukkan sudah tersedia, silahkan update stok!",
      });
    }

    await query_addProduct(body);
    res.status(200).json({
      status_text: "OK",
      message: "Add product successfully",
      data: {
        product_details: body,
      },
    });

    console.log(body);
  } catch (err) {
    res.status(500).json({
      status_text: "Internal Server Error",
      message: "Add product failed",
      server_message: err.message,
    });
  }
};

//get_allproducts
routes.get_allProducts = async (req, res) => {
  try {
    const [data] = await query_get_allProducts();
    res.status(200).json({
      status_text: "OK",
      message: "Get all products Successfully",
      data: {
        products_details: data,
      },
    });
    console.log(data);
  } catch (err) {
    res.status(500).json({
      status_text: "Internal Server Error",
      message: err.message,
    });
  }
};
// update_product
routes.update_product = async (req, res) => {
  const { id_product } = req.params;
  const { body } = req;
  try {
    await query_updateProduct(body, id_product);
    res.status(200).json({
      status_text: "OK",
      message: "Update product Successfully",
      data: {
        id: id_product,
        ...body,
      },
    });
  } catch (err) {
    res.status(500).json({
      status_text: "Internal Server Error",
      message: err.message,
    });
  }
};

routes.delete_product = async (req, res) => {
  const { id_product } = req.params;
  try {
    await query_deleteProduct(id_product);
    res.status(200).json({
      status_text: "OK",
      message: `Delete product id : ${id_product} Successfully`,
    });
  } catch (err) {
    res.status(500).json({
      status_text: "Internal Server Error",
      message: err.message,
    });
  }
};

// CHECKING for general routes =====================
//check grouping routes
routes.check = async (req, res) => {
  try {
    res.status(200).json({
      status_text: "OK",
      message: "Checking Successfully",
    });
  } catch (err) {
    res.status(500).json({
      statusText: "Internal Server Error",
      message: `Checking Failed:`,
      Error: err.message,
    });
  }
};

// export routes
module.exports = routes;
