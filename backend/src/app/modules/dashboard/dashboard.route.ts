// src/app/modules/dashboard/dashboard.route.ts

import express from "express";
import { DashboardController } from "./dashboard.controller";
import { verifyToken } from "../../middlewares/auth.middleware";

const router = express.Router();

router.get("/", verifyToken(), DashboardController.getDashboard);

export const DashboardRoutes = router;