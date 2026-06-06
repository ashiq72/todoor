"use strict";
// project.controller.ts
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
exports.ProjectController = void 0;
const project_service_1 = require("./project.service");
const createProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.user;
        const project = yield project_service_1.ProjectService.createProject(req.body, user.userId);
        res.status(201).json({
            success: true,
            data: project,
        });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
const getProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const projects = yield project_service_1.ProjectService.getProjects();
    res.json({
        success: true,
        data: projects,
    });
});
exports.ProjectController = {
    createProject,
    getProjects,
};
