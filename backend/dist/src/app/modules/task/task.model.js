"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: String,
    projectId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Project", required: true },
    assignedTo: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    dueDate: { type: Date, required: true },
    priority: {
        type: String,
        enum: ["low", "medium", "high"],
        default: "medium",
    },
    status: {
        type: String,
        enum: ["todo", "in-progress", "completed"],
        default: "todo",
    },
}, { timestamps: true });
// ❗ Prevent duplicate title in same project
taskSchema.index({ title: 1, projectId: 1 }, { unique: true });
exports.Task = (0, mongoose_1.model)("Task", taskSchema);
