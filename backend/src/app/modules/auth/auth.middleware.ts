// src/app/middlewares/auth.middleware.ts

import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../../../config";

const getCookieValue = (cookieHeader: string | undefined, name: string) => {
  if (!cookieHeader) return undefined;

  return cookieHeader
    .split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(`${name}=`))
    ?.split("=")
    .slice(1)
    .join("=");
};

const getTokenFromRequest = (req: Request) => {
  const authHeader = req.headers.authorization;

  if (authHeader?.startsWith("Bearer ")) {
    return authHeader.split(" ")[1];
  }

  return authHeader || getCookieValue(req.headers.cookie, "accessToken");
};

export const verifyToken = (roles?: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = getTokenFromRequest(req);

      if (!token) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }

      if (!config.jwt_secret) {
        throw new Error("JWT_SECRET is not defined");
      }

      const decoded = jwt.verify(token, config.jwt_secret) as any;

      if (roles && roles.length > 0 && !roles.includes(decoded.role)) {
        return res.status(403).json({
          success: false,
          message: "Forbidden",
        });
      }

      req.user = decoded;
      next();
    } catch (err) {
      return res.status(401).json({
        success: false,
        message: "Invalid Token",
      });
    }
  };
};
