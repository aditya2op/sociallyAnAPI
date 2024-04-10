const express = require("express");
const {
  createMessageController,
  getMessagesController,
  deleteMessageController,
} = require("../controllers/messageController");
const router = express.Router();

// Create Message
router.post("/create", createMessageController);

// Get Message
router.get("/:conversationId", getMessagesController);

// Delete Message
router.delete("/:messageId", deleteMessageController);

module.exports = router;
