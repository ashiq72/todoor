import { Schema, model } from "mongoose";
import { ITask } from "./task.interface";

const taskSchema = new Schema<ITask>(
  {
    title: { type: String, required: true },
    description: String,
    projectId: { type: Schema.Types.ObjectId, ref: "Project", required: true },
    assignedTo: { type: Schema.Types.ObjectId, ref: "User", required: true },
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
  },
  { timestamps: true }
);

// ❗ Prevent duplicate title in same project
taskSchema.index({ title: 1, projectId: 1 }, { unique: true });

export const Task = model<ITask>("Task", taskSchema);