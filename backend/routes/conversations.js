const express = require("express");
const router = express.Router();
const {
  createNewConversationController,
  getConversationOfUserController,
  getTwoUsersConversationController,
  deleteConversationController,
} = require("../controllers/conversationController");

// New Conversation
router.post("/create", createNewConversationController);

// Get Conversations of User
router.get("/:userId", getConversationOfUserController);

//Find Two Users Conversation
router.get("/:firstUserId/:secondUserId", getTwoUsersConversationController);

//Delete Conversation
router.delete("/delete/:conversationId", deleteConversationController);

module.exports = router;
