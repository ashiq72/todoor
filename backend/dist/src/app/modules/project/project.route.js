"use strict";
// project.route.ts
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const project_controller_1 = require("./project.controller");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const router = (0, express_1.Router)();
router.post("/", (0, auth_middleware_1.verifyToken)(["admin", "manager"]), project_controller_1.ProjectController.createProject);
router.get("/", (0, auth_middleware_1.verifyToken)(), project_controller_1.ProjectController.getProjects);
exports.default = router;
