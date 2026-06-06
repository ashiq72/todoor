// src/app/modules/dashboard/dashboard.controller.ts

import { Request, Response } from "express";
import { DashboardService } from "./dashboard.service";

const getDashboard = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;

    const data = await DashboardService.getDashboardData(user.userId);

    res.status(200).json({
      success: true,
      message: "Dashboard data fetched successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const DashboardController = {
  getDashboard,
};