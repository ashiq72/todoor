// src/app/modules/dashboard/dashboard.service.ts

import { Task } from "../task/task.model";

const getDashboardData = async (userId: string) => {
  const total = await Task.countDocuments({ user: userId });

  const completed = await Task.countDocuments({
    user: userId,
    status: "completed",
  });

  const pending = await Task.countDocuments({
    user: userId,
    status: "pending",
  });

  const inProgress = await Task.countDocuments({
    user: userId,
    status: "in-progress",
  });

  return {
    total,
    completed,
    pending,
    inProgress,
  };
};

export const DashboardService = {
  getDashboardData,
};