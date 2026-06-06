import { Types } from "mongoose";

export type TTaskStatus = "todo" | "in-progress" | "completed";
export type TPriority = "low" | "medium" | "high";

export interface ITask {
  title: string;
  description?: string;
  projectId: Types.ObjectId;
  assignedTo: Types.ObjectId;
  dueDate: Date;
  priority: TPriority;
  status: TTaskStatus;
}