const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

const User = require('../models/userModel')

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "user registered",
  });
});

// @desc    Authenticate user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "User Login",
  });
});

// @desc    Get user data
// @route   GET /api/users/me
// @access  Public
const getUserInfo = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "user registered",
  });
});

module.exports = {
  registerUser,
  loginUser,
  getUserInfo,
};
