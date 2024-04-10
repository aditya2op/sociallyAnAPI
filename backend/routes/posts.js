const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const {
  createPostController,
  createPostWithImagesController,
  updatePostController,
  getPostsController,
  getUserPostsController,
  deletePostsController,
  likePostController,
  unlikePostController,
} = require("../controllers/postController");

// Create Post
router.post("/create", createPostController);

// Create Post with Images
router.post(
  "/create/:userId",
  upload.array("images", 5),
  createPostWithImagesController
);

// Update Post
router.put("/update/:postId", updatePostController);

// Get All Posts
router.get("/all/:userId", getPostsController);

// Get User Posts
router.get("/user/:userId", getUserPostsController);

// Delete Post
router.delete("/delete/:postId", deletePostsController);

// Like Post
router.post("/like/:postId", likePostController);

// Like Post
router.post("/unlike/:postId", unlikePostController);

module.exports = router;
