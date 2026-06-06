// src/app/middlewares/auth.middleware.ts

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = (roles?: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      // 🔐 1. Get token from header
   const token = req.headers.authorization?.split(" ")[1];
      console.log("Token from header:", token);
      if (!token) {
        return res.status(401).json({
          message: "No token provided",
        });
      }

      // 🔐 2. Verify token
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET as string
      ) as any;

      // 🧠 3. Role check (if roles passed)
      if (roles && !roles.includes(decoded.role)) {
        return res.status(403).json({
          message: "Forbidden: You don't have access",
        });
      }

      // 📦 4. Attach user to request
      (req as any).user = decoded;

      next();
    } catch (err) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
  };
};