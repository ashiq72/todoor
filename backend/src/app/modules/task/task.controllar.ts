import { Request, Response } from "express";
import * as TaskService from "./task.service";

export const createTask = async (req: Request, res: Response) => {
  try {
    const result = await TaskService.createTaskIntoDB(req.body);
    res.status(201).json({
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getTasks = async (req: Request, res: Response) => {
  const result = await TaskService.getTasksFromDB(req.query);
  res.json(result);
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const result = await TaskService.updateTaskIntoDB(id, req.body);
    res.json(result);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  await TaskService.deleteTaskFromDB(id);
  res.json({ success: true });
};