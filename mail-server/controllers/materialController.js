const MailService = require("../services/mailService");

class MaterialController {

    async materialTimeRunningOut(req, res, next) {
        try {
            const title = "Время материала на исходе";
            const {to, link, subtitle} = req.body
            await MailService.TaskOrMaterial(to, link, title, subtitle);
            return res.status(200);
        } catch (e) {
            return res.status(500);
        }
    }

    async newCommentNotification(req, res, next) {
        try {
            const title = "Новый комментарий";
            const {to, link, subtitle} = req.body
            await MailService.TaskOrMaterial(to, link, title, subtitle);
            return res.status(200);
        } catch (e) {
            return res.status(500);
        }
    }
}


module.exports = new MaterialController();
