"use strict";
// src/app/modules/dashboard/dashboard.route.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardRoutes = void 0;
const express_1 = __importDefault(require("express"));
const dashboard_controller_1 = require("./dashboard.controller");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const router = express_1.default.Router();
router.get("/", (0, auth_middleware_1.verifyToken)(), dashboard_controller_1.DashboardController.getDashboard);
exports.DashboardRoutes = router;
