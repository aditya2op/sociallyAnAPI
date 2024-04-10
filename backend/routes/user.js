const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const {
  getUserController,
  updateUserController,
  followUserController,
  unfollowUserController,
  blockUserController,
  unblockUserController,
  getBlockedUsersController,
  deleteUserController,
  searchUserController,
  uploadProfilePictureController,
  uploadCoverPictureController,
} = require("../controllers/userController");

// Get User
router.get("/:userId", getUserController);

// Update User
router.put("/update/:userId", updateUserController);

// Follow User
router.post("/follow/:userId", followUserController);

// Unfollow User
router.post("/unfollow/:userId", unfollowUserController);

// Block User
router.post("/block/:userId", blockUserController);

// Unblock User
router.post("/unblock/:userId", unblockUserController);

// Get Blocked UserList
router.get("/blocked/:userId", getBlockedUsersController);

// Delete User
router.delete("/delete/:userId", deleteUserController);

// Search User
router.get("/search/:query", searchUserController);

// Update Profile Picture
router.put(
  "/update-profile-picture/:userId",
  upload.single("profilePicture"),
  uploadProfilePictureController
);

// Update Cover Picture
router.put(
  "/update-cover-picture/:userId",
  upload.single("coverPicture"),
  uploadCoverPictureController
);
module.exports = router;
