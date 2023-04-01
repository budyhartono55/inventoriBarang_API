const db_pool = require("../config/database");

const models = {};

models.query_get_allUsers = () => {
  const SQL_query = "SELECT * FROM users";
  db_pool.execute(SQL_query);

  return db_pool.execute(SQL_query);
};

models.query_addUser = (body) => {
  const SQL_query = ` INSERT INTO users (nama, email, password) 
                      VALUES ("${body.nama}", "${body.email}", "${body.password}")`;

  return db_pool.execute(SQL_query);
};

models.query_updateUser = (body, id_user) => {
  const SQL_query = ` UPDATE users 
                      SET nama="${body.nama}", email="${body.email}", password="${body.password}" 
                      WHERE id=${id_user}`;

  return db_pool.execute(SQL_query);
};

models.query_deleteUser = (id_user) => {
  const SQL_query = `DELETE from users WHERE id=${id_user}`;

  return db_pool.execute(SQL_query);
};

// export models
module.exports = models;
