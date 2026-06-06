// src/app/modules/user/user.model.ts

import mongoose from "mongoose";

export type TUser = {
  name: string;
  email: string;
  password: string;
  role: "admin" | "manager" | "member";
};

const userSchema = new mongoose.Schema<TUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "manager", "member"],
      default: "member",
    },
  },
  { timestamps: true }
);

export const User = mongoose.model<TUser>("User", userSchema);