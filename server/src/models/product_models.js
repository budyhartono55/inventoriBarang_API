const db_pool = require("../config/database");
const { storage } = require("../middleware/multer");

// models bucket
const models = {};

models.query_get_allProducts = () => {
  const SQL_query = "SELECT * FROM products";
  db_pool.execute(SQL_query);

  return db_pool.execute(SQL_query);
};

models.query_get_productById = (id_product) => {
  const SQL_query = ` SELECT * FROM products 
                      WHERE id = ${id_product};`;
  db_pool.execute(SQL_query);

  return db_pool.execute(SQL_query);
};

models.query_addProduct = (body) => {
  const SQL_query = ` INSERT INTO products (nama_barang, harga_beli, harga_jual, stok, gambar) 
                      VALUES ("${body.nama_barang}", "${body.harga_beli}", "${body.harga_jual}", "${body.stok}", "${body.gambar}")`;

  return db_pool.execute(SQL_query);
};

models.query_updateProduct = (body, id_product) => {
  const SQL_query = ` UPDATE products 
                      SET nama_barang="${body.nama_barang}", harga_beli="${body.harga_beli}", harga_jual="${body.harga_jual}", stok="${body.stok}", gambar= "${body.gambar}"
                      WHERE id=${id_product}`;

  return db_pool.execute(SQL_query);
};

models.query_deleteProduct = (id_product) => {
  const SQL_query = `DELETE from products WHERE id=${id_product}`;

  return db_pool.execute(SQL_query);
};

// export models
module.exports = models;
