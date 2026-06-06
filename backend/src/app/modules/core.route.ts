import express from "express";
import authRouter from "./auth/auth.route";
import projectRoutes from "./project/project.route";
import { DashboardRoutes } from "./dashboard/dashboard.route";
import { TaskRoutes } from "./task/task.route";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/projects", projectRoutes);
router.use("/dashboard", DashboardRoutes);
router.use("/tasks",TaskRoutes);

export default router;