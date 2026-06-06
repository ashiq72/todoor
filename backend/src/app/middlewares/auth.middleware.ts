import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = (roles?: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    try {
      const decoded: any = jwt.verify(token, "your_secret");

      req.user = decoded;

      // 🔐 Role check
      if (roles && roles.length > 0) {
        if (!roles.includes(decoded.role)) {
          return res.status(403).json({
            success: false,
            message: "Forbidden",
          });
        }
      }

      next();
    } catch (err) {
      return res.status(401).json({
        success: false,
        message: "Invalid Token",
      });
    }
  };
};