const User = require("../models/User");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const ApiStatus = require("../handlers/apiStatus");
require("../dto/userDto")
const AuthDTO = require("../dto/authDTO");
const tokenService = require("./tokenService");
const mailService = require("./mailService");


class AuthService {
    async registration(email, password, role) {
        const candidate = await User.findOne({where:{email}});
        if(candidate) {
            throw ApiStatus.badRequest("Пользователь с таким email уже существует");
        }
        const hashedPassword = await bcrypt.hash(password, 5);
        const activationLink = uuid.v4();
        const user = await User.create({
            email,
            password:hashedPassword,
            activationLink,
            role
        });
        const userLink =
            process.env.API_URL + "/ecosystem/auth/activate/" + activationLink;
        await mailService.sendActivationMail(email, userLink);
        const authDTO = new AuthDTO(user);
        const tokens = tokenService.generateToken({...authDTO});
        await tokenService.saveToken(authDTO.id, tokens.refreshToken);
        return {tokens, user:authDTO};
    }

    async login(email, password) {
        const user = await User.findOne({where:{email}});
        if(!user) {
            throw ApiStatus.badRequest("Пользователь с таким email не был найден");
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if(!isPassEquals) {
            throw ApiStatus.badRequest("Неверные данные");
        }
        const authDTO = new AuthDTO(user);
        const tokens = tokenService.generateToken({...authDTO});
        await tokenService.saveToken(authDTO.id, tokens.refreshToken);
        return {tokens, user:authDTO};
    }

    async activate(activationLink) {
        const user = await User.findOne({where:{activationLink}});
        if(!user) {
            throw ApiStatus.badRequest("Неккоректная ссылка активации");
        }
        user.isActivated = true;
        user.activationLink = null;
        await user.save();
    }

    async logout(refreshToken) {
        const logout = await tokenService.removeToken(refreshToken);
        return logout;
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


module.exports = new AuthService();
