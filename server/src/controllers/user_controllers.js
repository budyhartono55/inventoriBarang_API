const bcrypt = require("bcrypt");
require("dotenv").config();
const { query_get_allUsers, query_addUser, query_updateUser, query_deleteUser } = require("../models/user_models");

// routes bucket
const routes = {};

// routes collections ==================
//register
routes.add_user = async (req, res) => {
  const { body } = req;
  try {
    await query_addUser(body);
    res.status(200).json({
      status_text: "OK",
      message: "Add User successfully",
      data: {
        user_details: body,
      },
    });
  } catch (err) {
    res.status(500).json({
      status_text: "Internal Server Error",
      message: "Add User failed",
      server_message: err.message,
    });
  }
};

//get_allUsers
routes.get_allUsers = async (req, res) => {
  try {
    const [data] = await query_get_allUsers();
    res.status(200).json({
      status_text: "OK",
      message: "Get all users Successfully",
      data: {
        user_details: data,
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
// update_user
routes.update_user = async (req, res) => {
  const { id_user } = req.params;
  const { body } = req;
  try {
    await query_updateUser(body, id_user);
    res.status(200).json({
      status_text: "OK",
      message: "Update user Successfully",
      data: {
        id: id_user,
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

routes.delete_user = async (req, res) => {
  const { id_user } = req.params;
  try {
    await query_deleteUser(id_user);
    res.status(200).json({
      status_text: "OK",
      message: `Delete user id : ${id_user} Successfully`,
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
