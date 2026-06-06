import express from "express";
import authRouter from "./auth/auth.route";
import projectRoutes from "./project/project.route";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/projects", projectRoutes);

export default router;