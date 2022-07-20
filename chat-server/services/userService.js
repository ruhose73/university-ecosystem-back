const ApiStatus = require("../handlers/apiStatus");
const User = require("../models/User");
const UsernameDto = require("../dto/usernameDTO");
const tokenService = require("../services/tokenService");


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

    async getAllUsers() {
        try {
            const user = await User.findAll()
            if(!user) {
                throw ApiStatus.badRequest("Пользователи не найдены");
            } 
            return user;

        } catch (e) {
            throw ApiStatus.internal(e);
        }
    }

    async refresh(refreshToken) {
        if(!refreshToken) {
            throw ApiStatus.UnauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);

        const tokenFromDb = await tokenService.findToken(refreshToken);
        if(!userData || !tokenFromDb) {
            throw ApiStatus.UnauthorizedError();
        }
        const user = await User.findByPk(userData.id);
        const authDTO = new AuthDTO(user);
        const tokens = tokenService.generateToken({...authDTO});
        await tokenService.saveToken(authDTO.id, tokens.refreshToken);
        return {tokens, user:authDTO};
    }
}

module.exports = new UserService();
