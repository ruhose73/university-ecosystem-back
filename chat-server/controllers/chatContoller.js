const ChatService = require("../services/chatService");
const UserService = require("../services/userService");

class  ChatController {

    async getAllChats(req, res, next) {
        try {
            const userId = req.params.id
            const chats = await ChatService.getAllChats();
            for(let i = 0; i < chats.length; i++) {
                if(chats.firstUserId == userId) {
                    const name = await UserService.getUsernameById(
                        chats[i].secondUserId
                    );
                    chats[i].dataValues.name =
                    name.usernameDTO.first_name + " " + founded.usernameDTO.last_name;
                } else {
                    const name = await UserService.getUsernameById(
                        chats[i].firstUserId
                    );
                    chats[i].dataValues.name =
                    name.usernameDTO.first_name + " " + name.usernameDTO.last_name;
                }
            }
            return res.json(chats);
        } catch (e) {
            next(e);
        }
    }

    async createChat (req, res, next) {
        try{

            const {firstUserId, secondUserId} = req.body;
            const createChat = await ChatService.createChat(firstUserId,secondUserId);
            const name = await UserService.getUsernameById(secondUserId);
            chat.dataValues.name = name.usernameDTO.first_name + " " + name.usernameDTO.last_name
            return res.json(createChat);
            
        } catch (e) {
            next(e);
        }
    }

}

module.exports = new ChatController();