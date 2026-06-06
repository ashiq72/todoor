// src/app/modules/auth/auth.controller.ts

import { CookieOptions, Request, Response } from "express";
import { AuthService } from "./auth.service";
import config from "../../../config";

const authCookieOptions: CookieOptions = {
  httpOnly: true,
  secure: config.node_env === "production",
  sameSite: config.node_env === "production" ? "none" : "lax",
  maxAge: 7 * 24 * 60 * 60 * 1000,
  path: "/",
};

const register = async (req: Request, res: Response) => {
  try {
    const user = await AuthService.registerUser(req.body);
    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password required",
      });
    }

    const result = await AuthService.loginUser(email, password);

    res.cookie("accessToken", result.token, authCookieOptions);

    return res.json({
      success: true,
      data: {
        user: result.user,
      },
    });
  } catch (err: any) {
    res.status(401).json({ message: err.message });
  }
};

const me = async (req: Request, res: Response) => {
  return res.json({
    success: true,
    data: {
      user: req.user,
    },
  });
};

const logout = async (_req: Request, res: Response) => {
  res.clearCookie("accessToken", {
    ...authCookieOptions,
    maxAge: undefined,
  });

  return res.json({
    success: true,
    message: "Logged out successfully",
  });
};

export const AuthController = {
  register,
  login,
  me,
  logout,
};
