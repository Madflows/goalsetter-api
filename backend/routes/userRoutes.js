const express = require("express");
const {
  registerUser,
  getUserInfo,
  loginUser,
} = require("../controllers/userController");

const router = express.Router();

router.route("/").post(registerUser);
router.route("/me").get(getUserInfo);
router.route("/login").post(loginUser);

module.exports = router;
