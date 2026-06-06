"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTaskValidation = void 0;
const zod_1 = require("zod");
exports.createTaskValidation = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
        projectId: zod_1.z.string(),
        assignedTo: zod_1.z.string(),
        dueDate: zod_1.z.string(),
        priority: zod_1.z.enum(["low", "medium", "high"]).optional(),
    }),
});
