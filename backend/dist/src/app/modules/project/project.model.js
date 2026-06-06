"use strict";
// project.model.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const projectSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    description: String,
    deadline: { type: Date, required: true },
    status: {
        type: String,
        enum: ["active", "completed", "on_hold"],
        default: "active",
    },
    members: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "User" }],
    createdBy: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
    },
}, { timestamps: true });
exports.Project = mongoose_1.default.model("Project", projectSchema);
