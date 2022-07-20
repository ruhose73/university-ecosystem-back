const UserService = require("../services/userService");


class UserController {
    //  http://localhost:5000/ecosystem/user/setFIO
    async setFIO(req, res, next) {
        try {
            const {userId, firstName, middleName, lastName} = req.body;
            const setFIO = await UserService.setFIO(
                userId,
                firstName,
                middleName,
                lastName
            );
            return res.json(setFIO);
        } catch (e) {
            next(e);
        }
    }

    //Добавить вывод всех курсов микрочелика
    //Добавить вывод всех домашек микрочелика
    //Добавить вывод всех материалов микрочелика
}


module.exports = new UserController();
