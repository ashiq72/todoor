"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (roles) => {
    return (req, res, next) => {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }
        try {
            const decoded = jsonwebtoken_1.default.verify(token, "your_secret");
            req.user = decoded;
            // 🔐 Role check
            if (roles && roles.length > 0) {
                if (!roles.includes(decoded.role)) {
                    return res.status(403).json({
                        success: false,
                        message: "Forbidden",
                    });
                }
            }
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
