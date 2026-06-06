// project.controller.ts

import { Request, Response } from "express";
import { ProjectService } from "./project.service";

const createProject = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;

    const project = await ProjectService.createProject(
      req.body,
      user.userId
    );

    res.status(201).json({
      success: true,
      data: project,
    });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

const getProjects = async (req: Request, res: Response) => {
  const projects = await ProjectService.getProjects();

  res.json({
    success: true,
    data: projects,
  });
};

export const ProjectController = {
  createProject,
  getProjects,
};