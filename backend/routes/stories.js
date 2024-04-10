const express = require("express");
const upload = require("../middlewares/upload");
const router = express.Router();
const {
  createStoryController,
  getStoriesController,
  getUserStoriesController,
  deleteStoryController,
  deleteStoriesController,
} = require("../controllers/storyController");

// Create Story
router.post("/create/:userId", upload.single("image"), createStoryController);

// Get All Stories
router.get("/all/:userId", getStoriesController);

// Get User Stories
router.get("/user/:userId", getUserStoriesController);

//Delete A Story
router.delete("/delete/:storyId", deleteStoryController);

//Delete All Stories
router.delete("/delete/stories/:userId", deleteStoriesController);
module.exports = router;
