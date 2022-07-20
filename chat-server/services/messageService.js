const Messages = require("../models/Messages");
const ApiStatus = require("../handlers/apiStatus");

class MessageService {

    async getMessages (chatId) {
        try {
            const chatMessages = await Messages.findAll({ where:{chat_id:chatId}});
            if(!chatMessages) {
                throw ApiStatus.badRequest("Сообщения не найдены");
            } 
            return {chatMessages};
        } catch (e){
            throw ApiStatus.internal(e);
        }
    }

    async createMessages(chat_id, author_id, user, text) {
        try {
            const createMessage = await Message.create({chat_id,user_id:author_id,user_id:user,text});
            if(!createMessage) {
                throw ApiStatus.internal("Ошибка создания сообщения");
            }
            return {createMessage};
        } catch (e) {
            throw ApiStatus.internal(e);
        }
    }
}

module.exports = new MessageService();
