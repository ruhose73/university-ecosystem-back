const AuthService = require("../services/authService");
const {validationResult} = require("express-validator");
const ApiStatus = require("../handlers/apiStatus");
const path = require("path");

class AuthController {

    //  http://localhost:5000/ecosystem/auth/register
    async register(req, res, next) {
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                return next(ApiStatus.badRequest("Ошибка при валидации"));
            }
            const {email, password, role} = req.body;
            const userData = await AuthService.registration(email, password, role);
            res.cookie("refreshToken", userData.tokens.refreshToken, {
                maxAge:30 * 24 * 60 * 60 * 1000,
                httpOnly:true,
            });
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    //  http://localhost:5000/ecosystem/auth/login
    async login(req, res, next) {
        try {
            const {email, password} = req.body;
            const userData = await AuthService.login(email, password);
            res.cookie("refreshToken", userData.tokens.refreshToken, {
                maxAge:30 * 24 * 60 * 60 * 1000,
                httpOnly:false,
            });
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    //  http://localhost:5000/ecosystem/auth/activate/:link
    async activate(req, res, next) {
        try {
            const activationLink = req.params.link;
            const link = await AuthService.activate(activationLink);
            if(!link) {
                return res.sendFile(
                    path.join(__dirname, "../public", "activated.html")
                );
            }
            return res.sendFile(
                path.join(__dirname, "../public", "activationError.html")
            );
        } catch (e) {
            next(e);
        }
    }

    //  http://localhost:5000/ecosystem/auth/refresh
    async refresh(req, res, next) {
        try {
            const refreshToken = req.cookies;
            const userData = await AuthService.refresh(refreshToken);
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    //  http://localhost:5000/ecosystem/auth/logout
    async logout(req, res, next) {
        try {
            const refreshToken = req.cookies;
            const token = await AuthService.logout(refreshToken);
            res.clearCookie("refreshToken");
            return next(ApiStatus.ok(token));
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new AuthController();
