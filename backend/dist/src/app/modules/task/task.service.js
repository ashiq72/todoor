"use strict";
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
exports.deleteTaskFromDB = exports.updateTaskIntoDB = exports.getTasksFromDB = exports.createTaskIntoDB = void 0;
const task_model_1 = require("./task.model");
const createTaskIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // ❗ Past date validation
    if (new Date(payload.dueDate) < new Date()) {
        throw new Error("Due date cannot be in the past");
    }
    const task = yield task_model_1.Task.create(payload);
    return task;
});
exports.createTaskIntoDB = createTaskIntoDB;
const getTasksFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = {};
    if (query.status)
        filter.status = query.status;
    if (query.priority)
        filter.priority = query.priority;
    if (query.assignedTo)
        filter.assignedTo = query.assignedTo;
    const result = yield task_model_1.Task.find(filter)
        .populate("assignedTo")
        .populate("projectId");
    return result;
});
exports.getTasksFromDB = getTasksFromDB;
const updateTaskIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield task_model_1.Task.findById(id);
    if (!task)
        throw new Error("Task not found");
    // ❗ Completed task cannot be reassigned
    if (task.status === "completed" && payload.assignedTo) {
        throw new Error("Cannot reassign completed task");
    }
    const updated = yield task_model_1.Task.findByIdAndUpdate(id, payload, {
        new: true,
    });
    return updated;
});
exports.updateTaskIntoDB = updateTaskIntoDB;
const deleteTaskFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield task_model_1.Task.findByIdAndDelete(id);
});
exports.deleteTaskFromDB = deleteTaskFromDB;
