// src/services/api.ts

const BASE_URL = "https://todoor-x.vercel.app/api/v1";

export const fetcher = async (url: string, options: any = {}) => {
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("token")
      : null;

  const res = await fetch(`${BASE_URL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
      ...options.headers,
    },
  });

  return res.json();
};