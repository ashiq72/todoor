"use strict";
// src/app/middlewares/auth.middleware.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../../config"));
const getCookieValue = (cookieHeader, name) => {
    var _a;
    if (!cookieHeader)
        return undefined;
    return (_a = cookieHeader
        .split(";")
        .map((cookie) => cookie.trim())
        .find((cookie) => cookie.startsWith(`${name}=`))) === null || _a === void 0 ? void 0 : _a.split("=").slice(1).join("=");
};
const getTokenFromRequest = (req) => {
    const authHeader = req.headers.authorization;
    if (authHeader === null || authHeader === void 0 ? void 0 : authHeader.startsWith("Bearer ")) {
        return authHeader.split(" ")[1];
    }
    return authHeader || getCookieValue(req.headers.cookie, "accessToken");
};
const verifyToken = (roles) => {
    return (req, res, next) => {
        try {
            const token = getTokenFromRequest(req);
            if (!token) {
                return res.status(401).json({
                    success: false,
                    message: "Unauthorized",
                });
            }
            if (!config_1.default.jwt_secret) {
                throw new Error("JWT_SECRET is not defined");
            }
            const decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwt_secret);
            if (roles && roles.length > 0 && !roles.includes(decoded.role)) {
                return res.status(403).json({
                    success: false,
                    message: "Forbidden",
                });
            }
            req.user = decoded;
            next();
        }
        catch (err) {
            return res.status(401).json({
                success: false,
                message: "Invalid Token",
            });
        }
    };
};
exports.verifyToken = verifyToken;
