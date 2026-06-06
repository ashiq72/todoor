import { fetcher } from "./api";

export const getTasks = async () => {
  return await fetcher("/tasks", {
    method: "GET",
  });
};

export const createTask = async (data: any) => {
  return await fetcher("/tasks", {
    method: "POST",
    body: JSON.stringify(data),
  });
};