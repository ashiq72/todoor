import { fetcher } from "./api";

export const loginUser = async (data: {
  email: string;
  password: string;
}) => {
  const res = await fetcher("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });

  // 🔥 important fix
  return {
    success: res.success,
    token: res.data?.accessToken, // 👈 match your backend
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

export const getDashboard = async () => {
  return await fetcher("/dashboard", {
    method: "GET",
  });
};