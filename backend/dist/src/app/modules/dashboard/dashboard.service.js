"use strict";
// src/app/modules/dashboard/dashboard.service.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardService = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const task_model_1 = require("../task/task.model");
const getDashboardData = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const objectUserId = new mongoose_1.default.Types.ObjectId(userId);
    const stats = yield task_model_1.Task.aggregate([
        {
            $match: { user: objectUserId },
        },
        {
            $group: {
                _id: "$status",
                count: { $sum: 1 },
            },
        },
    ]);
    // default values
    let total = 0;
    let completed = 0;
    let pending = 0;
    let inProgress = 0;
    // map aggregation result
    stats.forEach((item) => {
        total += item.count;
        if (item._id === "completed")
            completed = item.count;
        if (item._id === "pending")
            pending = item.count;
        if (item._id === "in-progress")
            inProgress = item.count;
    });
    return {
        total,
        completed,
        pending,
        inProgress,
    };
});
exports.DashboardService = {
    getDashboardData,
};
