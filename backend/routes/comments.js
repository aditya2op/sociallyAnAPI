const express = require("express");
const router = express.Router();
const {
  createCommentController,
  createCommentReplyController,
  updateCommentController,
  updateReplyCommentController,
  getCommentsByPostController,
  deleteCommentController,
  deleteReplyCommentController,
  likeCommentController,
  unlikeCommentController,
  likeReplyCommentController,
  unlikeReplyCommentController,
} = require("../controllers/commentController");

// Create Comment
router.post("/create", createCommentController);

// Create Comment Reply
router.post("create/reply/:commentId", createCommentReplyController);

// Update Comment
router.put("/update/:commentId", updateCommentController);

// Update Reply Comment
router.put("update/:commentId/replies/:replyId", updateReplyCommentController);

// Get All Post Comments
router.get("/post/:postId", getCommentsByPostController);

// Delete A Comment
router.delete("/delete/:commentId", deleteCommentController);

// Delete a Reply Comment
router.delete(
  "/delete/:commentId/replies/:replyId",
  deleteReplyCommentController
);

// Like A Comment
router.post("/like/:commentId", likeCommentController);

// Unlike A Comment
router.post("/unlike/:commentId", unlikeCommentController);

// Like A Reply Comment
router.post("/:commentId/replies/like/:replyId", likeReplyCommentController);

// Unlike A Reply Comment
router.post(
  "/:commentId/replies/unlike/:replyId",
  unlikeReplyCommentController
);

module.exports = router;
