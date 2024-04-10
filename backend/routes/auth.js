const express = require("express");
const {
  registerController,
  loginController,
  logoutController,
  refetchUserController,
} = require("../controllers/authController");
const router = express.Router();

// Register
router.post("/register", registerController);

// Login
router.post("/login", loginController);

// Logout
router.get("/logout", logoutController);

// Fetch Currect user
router.get("/refetch", refetchUserController);

module.exports = router;
