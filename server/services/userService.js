const ApiStatus = require("../handlers/apiStatus");
const User = require("../models/User");
const UsernameDto = require("../dto/usernameDTO");


class UserService {

    async getUsernameById(userId) {
        try {
            const user = await User.findByPk(userId);
            if(user) {
                const usernameDTO = new UsernameDto(user);
                return {usernameDTO};
            } else {
                throw ApiStatus.badRequest("Пользователь не найден");
            }
        } catch (e) {
            throw ApiStatus.internal(e);
        }
    }

    async addUserToGroup(groupId, userId) {
        try {
            const user = await User.findByPk(userId);
            if(user) {
                user.GroupId = groupId;
                await user.save();
                return user;
            } else {
                throw ApiStatus.badRequest("Пользователь не найден");
            }
        } catch (e) {
            throw ApiStatus.internal(e);
        }
    }

    async setFIO(userId, firstName, middleName, lastName) {
        try {
            const user = await User.findByPk(userId);
            if(user) {
                user.first_name = firstName;
                user.middle_name = middleName;
                user.last_name = lastName;
                await user.save();
                return user;
            } else {
                throw ApiStatus.badRequest("Пользователь не найден");
            }
        } catch (e) {
            throw ApiStatus.internal(e);
        }
    }

    async getUsersFromGroup(groupId) {
        try {
            const users = await User.findAll({where:{GroupId:groupId}});
            if(users) {
                return users;
            } else {
                throw ApiStatus.badRequest("Пользователь не найден");
            }
        } catch (e) {
            throw ApiStatus.internal(e);
        }
    }

    async getUserById(userId) {
        try {
            const user = await User.findByPk(userId);
            if(!user) {
                throw ApiStatus.badRequest("Пользователь не найден");
            } else {
                return user;
            }
        } catch (e) {
            throw ApiStatus.internal(e);
        }
    }
}


module.exports = new UserService();
