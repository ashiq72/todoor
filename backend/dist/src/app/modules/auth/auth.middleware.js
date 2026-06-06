"use strict";
// src/app/middlewares/auth.middleware.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (roles) => {
    return (req, res, next) => {
        try {
            const token = req.headers.authorization;
            if (!token)
                throw new Error("No token provided");
            const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
            if (roles && !roles.includes(decoded.role)) {
                return res.status(403).json({
                    message: "Forbidden",
                });
            }
            req.user = decoded;
            next();
        }
        catch (err) {
            res.status(401).json({
                message: "Unauthorized",
            });
        }
    };
};
exports.verifyToken = verifyToken;
