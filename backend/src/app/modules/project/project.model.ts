// project.model.ts

import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    deadline: { type: Date, required: true },
    status: {
      type: String,
      enum: ["active", "completed", "on_hold"],
      default: "active",
    },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Project = mongoose.model("Project", projectSchema);