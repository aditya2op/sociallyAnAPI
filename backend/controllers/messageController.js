const Message = require("../models/Message");
const { CustomError } = require("../middlewares/error");

const createMessageController = async (req, res, next) => {
  const newMessage = new Message(req.body);
  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (error) {
    next(error);
  }
};

const getMessagesController = async (req, res, next) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });

    res.status(200).json(messages);
  } catch (error) {
    next(error);
  }
};

const deleteMessageController = async (req, res, next) => {
  const { messageId } = req.params;
  try {
    const message = await Message.find(messageId);
    if (!message) {
      throw new CustomError("Message does not exist!", 404);
    }
    await message.delete();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createMessageController,
  getMessagesController,
  deleteMessageController,
};
