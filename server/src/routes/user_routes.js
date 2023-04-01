// import express
const express = require("express");
const { check, add_user, get_allUsers, update_user, delete_user } = require("../controllers/user_controllers"); //import path

const router = express.Router(); //router function

// execute
// POST =========CREATE============
router.post("/user/add", add_user);

// GET ==========READ============
router.get("/user/get_all", get_allUsers);
router.get("/global/check", check);

//PUT ==========UPDATE============
router.put("/user/update/:id_user", update_user);

// DELETE ========= DELETE =========
router.delete("/user/delete/:id_user", delete_user);

// export route ====================
module.exports = router;
