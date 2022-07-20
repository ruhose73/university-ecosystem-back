const MailService = require("../services/mailService");
class GroupController {

    async usersGrades(req, res, next) {
        try {
            return res.status(200);
        } catch (e) {
            return res.status(500);
        }
    }
}

module.exports = new GroupController();
