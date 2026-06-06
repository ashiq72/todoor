// src/app/modules/dashboard/dashboard.service.ts

import mongoose from "mongoose";
import { Task } from "../task/task.model";

const getDashboardData = async (userId: string) => {
  const objectUserId = new mongoose.Types.ObjectId(userId);

  const stats = await Task.aggregate([
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

    if (item._id === "completed") completed = item.count;
    if (item._id === "pending") pending = item.count;
    if (item._id === "in-progress") inProgress = item.count;
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