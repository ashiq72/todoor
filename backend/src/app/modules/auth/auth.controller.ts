// src/app/modules/auth/auth.controller.ts

import { Request, Response } from "express";
import { AuthService } from "./auth.service";

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

    res.json({
      success: true,
      token: result.token,
    });
  } catch (err: any) {
    res.status(401).json({ message: err.message });
  }
};

export const AuthController = {
  register,
  login,
};