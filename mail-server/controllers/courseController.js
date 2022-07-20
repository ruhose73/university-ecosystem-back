const MailService = require("../services/mailService");


class CourseController {

    async newCourseNotification(req, res, next) {
        try {
            const title = "Новый курс";
            const {user, link, subtitle} = req.body
            console.log(user, link, subtitle);
            await MailService.newNotification(user, link, title, subtitle);
            return res.json("Сообщение отправлено");
        } catch (e) {
            return res.status(500);
        }
    }

    async newMaterialNotification(req, res, next) {
        try {
            const title = "Новый материал";
            const {to, link, subtitle} = req.body
            await MailService.newNotification(to, link, title, subtitle);
            return res.json("Сообщение отправлено");
        } catch (e) {
            return res.status(500);
        }
    }

    async newTaskNotification(req, res, next) {
        try {
            const title = "Новое задание";
            const {to, link, subtitle} = req.body
            await MailService.newNotification(to, link, title, subtitle);
            return res.json("Сообщение отправлено");
        } catch (e) {
            return res.status(500);
        }
    }
}

module.exports = new CourseController();
