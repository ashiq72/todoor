import { z } from "zod";

export const createTaskValidation = z.object({
  body: z.object({
    title: z.string(),
    projectId: z.string(),
    assignedTo: z.string(),
    dueDate: z.string(),
    priority: z.enum(["low", "medium", "high"]).optional(),
  }),
});