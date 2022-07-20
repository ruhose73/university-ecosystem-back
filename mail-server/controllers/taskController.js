const MailService = require("../services/mailService");
class TaskController {

    async taskTimeRunningOut(req, res, next) {
        try {
            const title = "Время задания на исходе";
            const {to, link, subtitle} = req.body
            await MailService.TaskOrMaterial(to, link, title, subtitle);
            return res.json("Сообщение отправлено");
        } catch (e) {
            return res.status(500);
        }
    }

    async newTaskCommentNotification(req, res, next) {
        try {
            const title = "Новый комментарий";
            const {to, link, subtitle} = req.body
            await MailService.TaskOrMaterial(to, link, title, subtitle);
            return res.json("Сообщение отправлено");
        } catch (e) {
            return res.status(500);
        }
    }

    async taskGrade(req, res, next) {
        try {
            const title = "Поставлена оценка: ";
            const {to, link, subtitle} = req.body
            await MailService.TaskOrMaterial(to, link, title, subtitle);
            return res.json("Сообщение отправлено");
        } catch (e) {
            return res.status(500);
        }
    }
}


module.exports = new TaskController();