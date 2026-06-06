"use strict";
// project.service.ts
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
exports.ProjectService = void 0;
const project_model_1 = require("./project.model");
const createProject = (payload, userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield project_model_1.Project.create(Object.assign(Object.assign({}, payload), { createdBy: userId }));
});
const getProjects = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield project_model_1.Project.find().populate("members");
});
const updateProject = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield project_model_1.Project.findByIdAndUpdate(id, payload, { new: true });
});
const deleteProject = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield project_model_1.Project.findByIdAndDelete(id);
});
exports.ProjectService = {
    createProject,
    getProjects,
    updateProject,
    deleteProject,
};
