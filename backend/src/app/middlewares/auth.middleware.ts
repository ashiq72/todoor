// src/app/middlewares/auth.middleware.ts

import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

// 🔐 custom type (optional but better)
interface DecodedUser extends JwtPayload {
  email: string;
  role: string;
  userId: string;
}

// 🎯 middleware factory (with roles)
export const verifyToken = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      // 1️⃣ Get Authorization header
      const authHeader = req.headers.authorization;

      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized: No token provided",
        });
      }

      // 2️⃣ Extract token
      const token = authHeader.split(" ")[1];

      // 3️⃣ Verify token
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET as string
      ) as DecodedUser;

      // 4️⃣ Role check (if roles provided)
      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({
          success: false,
          message: "Forbidden: Access denied",
        });
      }

      // 5️⃣ Attach user to request
      (req as any).user = decoded;

      next();
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: Invalid or expired token",
      });
    }
  };
};