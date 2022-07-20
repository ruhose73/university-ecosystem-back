const Chat = require("../models/Chat");
const ApiStatus = require("../handlers/apiStatus");
const MessageService = require("../services/messageService");

class ChatService {

    async getAllChats () {
        try {
            const chats = await Chat.findAll();
            if(chats) {
                return chats;
            } else {
                throw ApiStatus.badRequest("Чаты не найдены");
            }
        } catch (e) {
            throw ApiStatus.internal(e);
        }
    };

    async createChat (firstUserId, secondUserId) {
        try {
            const candidateChat = await Chat.findOne({where:{firstUserId, secondUserId}});
            if(candidateChat) {
                const chatMessages = await MessageService.getMessages(candidateChat.id)
                return {candidateChat, chatMessages}
            } else {
                const createChat = await Chat.create({firstUserId,secondUserId});
                if(!createChat) {
                    throw ApiStatus.internal("Ошибка создания чата");
                }
                return {createChat};
            }
        } catch (e) {
            throw ApiStatus.internal(e);
        }
    }

    async findSecondUser (chatId, author_id) {
        const chatInfo = await Chat.findOne({where:{id:chatId}});
        if(chatInfo.firstUserId == author_id) {
            return chatInfo.secondUserId
        } else {
            return chatInfo.firstUserId
        }
    }

}


module.exports = new ChatService();
