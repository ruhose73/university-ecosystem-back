const MailService = require("../services/mailService");
class TaskController {

    async newMessageNotification(req, res, next) {
        try {
            const title = "Новое сообщение";
            const {to, author} = req.body
            await MailService.newMessage(to, title, author);
            return res.status(200);
        } catch (e) {
            return res.status(500);
        }
    }
}


module.exports = new TaskController();