const MessageService = require("../services/messageService");
const ChatService = require("../services/chatService");
const ApiStatus = require("../handlers/apiStatus");

class  MessageController {

    async getMessages (req, res, next) {
        try {
            const {chatId} = req.params.id
            const messages = await MessageService.getMessages(chatId)
            return res.json(messages);
        } catch (e) {
            next(e);
        }
    };

    async addMessage (req, res, next) {
        try {
            const {chat_id, author_id, text} = req.body;
            const user = await ChatService.findSecondUser(chat_id, author_id)
            const createMessage = await MessageService.createMessages(chat_id, author_id, user, text)
            if (createMessage) {
                return res.status(200)
            } else {
                return next(ApiStatus.badRequest("Ошибка добавления сообщения"));
            }
        } catch (e) {
            next(e);
        }
    };

}

module.exports = new MessageController();