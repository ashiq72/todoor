const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetcher = async (
  url: string,
  options: RequestInit = {}
) => {
  try {
    const res = await fetch(`${BASE_URL}${url}`, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // 🔥 important for auth (cookies)
      ...options,
    });

    const data = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: data.message || "Request failed",
      };
    }

    return data;
  } catch (error) {
    return {
      success: false,
      message: "Network error",
    };
  }
};