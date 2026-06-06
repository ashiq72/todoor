import express from "express";
import * as TaskController from "./task.controllar";
import { verifyToken } from "../auth/auth.middleware";

const router = express.Router();

router.post("/",verifyToken(), TaskController.createTask);
router.get("/", TaskController.getTasks);
router.patch("/:id", TaskController.updateTask);
router.delete("/:id", verifyToken(["admin"]), TaskController.deleteTask);

export const TaskRoutes = router;