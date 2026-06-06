"use strict";
// src/app/modules/auth/auth.controller.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_service_1 = require("./auth.service");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield auth_service_1.AuthService.registerUser(req.body);
        res.status(201).json({
            success: true,
            data: user,
        });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password required",
            });
        }
        const result = yield auth_service_1.AuthService.loginUser(email, password);
        res.json({
            success: true,
            token: result.token,
        });
    }
    catch (err) {
        res.status(401).json({ message: err.message });
    }
});
exports.AuthController = {
    register,
    login,
};
