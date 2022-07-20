const UserService = require("../services/userService");

class  UserController {

    async getAllUsers (req, res, next) {
        try {
            const users = await UserService.getAllUsers()

            for(let i = 0; i < users.length; i++) {
                const name = await UserService.getUsernameById(users[i].id);
                users[i].dataValues.author_name =
                    name.usernameDTO.first_name + " " + name.usernameDTO.last_name;
            }
            
            return res.json(users);
        } catch (e) {
            next(e);
        }
    }

    async refresh(req, res, next) {
        try {
            const refreshToken = req.cookies;
            const userData = await UserService.refresh(refreshToken);
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new UserController();