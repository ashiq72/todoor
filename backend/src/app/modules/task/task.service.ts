import { Task } from "./task.model";

export const createTaskIntoDB = async (payload: any) => {
  // ❗ Past date validation
  if (new Date(payload.dueDate) < new Date()) {
    throw new Error("Due date cannot be in the past");
  }

  const task = await Task.create(payload);
  return task;
};

export const getTasksFromDB = async (query: any) => {
  const filter: any = {};

  if (query.status) filter.status = query.status;
  if (query.priority) filter.priority = query.priority;
  if (query.assignedTo) filter.assignedTo = query.assignedTo;

  const result = await Task.find(filter)
    .populate("assignedTo")
    .populate("projectId");

  return result;
};

export const updateTaskIntoDB = async (id: string, payload: any) => {
  const task = await Task.findById(id);

  if (!task) throw new Error("Task not found");

  // ❗ Completed task cannot be reassigned
  if (task.status === "completed" && payload.assignedTo) {
    throw new Error("Cannot reassign completed task");
  }

  const updated = await Task.findByIdAndUpdate(id, payload, {
    new: true,
  });

  return updated;
};

export const deleteTaskFromDB = async (id: string) => {
  return await Task.findByIdAndDelete(id);
};