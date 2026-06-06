"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = __importDefault(require("./auth/auth.route"));
const project_route_1 = __importDefault(require("./project/project.route"));
const dashboard_route_1 = require("./dashboard/dashboard.route");
const task_route_1 = require("./task/task.route");
const router = express_1.default.Router();
router.use("/auth", auth_route_1.default);
router.use("/projects", project_route_1.default);
router.use("/dashboard", dashboard_route_1.DashboardRoutes);
router.use("/tasks", task_route_1.TaskRoutes);
exports.default = router;
