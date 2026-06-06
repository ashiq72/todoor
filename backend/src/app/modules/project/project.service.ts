// project.service.ts

import { Project } from "./project.model";

const createProject = async (payload: any, userId: string) => {
  return await Project.create({
    ...payload,
    createdBy: userId,
  });
};

const getProjects = async () => {
  return await Project.find().populate("members");
};

const updateProject = async (id: string, payload: any) => {
  return await Project.findByIdAndUpdate(id, payload, { new: true });
};

const deleteProject = async (id: string) => {
  return await Project.findByIdAndDelete(id);
};

export const ProjectService = {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
};