// project.route.ts

import { Router } from "express";
import { ProjectController } from "./project.controller";
import { verifyToken } from "../../middlewares/auth.middleware";

const router = Router();

router.post("/", verifyToken(["admin", "manager"]), ProjectController.createProject);
router.get("/", verifyToken(), ProjectController.getProjects);

export default router;