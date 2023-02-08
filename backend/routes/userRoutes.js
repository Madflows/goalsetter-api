const express = require("express");
const {
  registerUser,
  getUserInfo,
  loginUser,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(registerUser);
router.get("/me", protect, getUserInfo);
router.route("/login").post(loginUser);

module.exports = router;
