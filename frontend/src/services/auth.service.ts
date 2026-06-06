import { fetcher } from "./api";

export const loginUser = async (data: {
  email: string;
  password: string;
}) => {
  const res = await fetcher("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });

  return {
    success: res.success,
    user: res.data?.user,
    message: res.message,
  };
};

export const registerUser = async (data: any) => {
  const res = await fetcher("/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });

  return res;
};

export const getCurrentUser = async () => {
  return await fetcher("/auth/me", {
    method: "GET",
  });
};

export const getDashboard = async () => {
  return await fetcher("/dashboard", {
    method: "GET",
  });
};

export const logoutUser = async () => {
  return await fetcher("/auth/logout", {
    method: "POST",
  });
};
