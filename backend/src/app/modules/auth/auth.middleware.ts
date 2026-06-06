// src/app/middlewares/auth.middleware.ts

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = (roles?: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;

      if (!token) throw new Error("No token provided");

      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET as string
      ) as any;

      if (roles && !roles.includes(decoded.role)) {
        return res.status(403).json({
          message: "Forbidden",
        });
      }

      (req as any).user = decoded;

      next();
    } catch (err) {
      res.status(401).json({
        message: "Unauthorized",
      });
    }
  };
};