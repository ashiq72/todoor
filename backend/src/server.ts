import http from "http";
import mongoose from "mongoose";
import dotenv from "dotenv";

import app from "./app";
import config from "./config";

dotenv.config();

let server: http.Server;

const PORT = config.port || 5000;
const DATABASE_URL = config.database_url as string;
console.log(`🔧 Using database URL: ${DATABASE_URL}`);

async function startServer() {
  try {
    // ✅ Connect Database
    await mongoose.connect(DATABASE_URL);
    console.log("✅ Database connected successfully");

    // ✅ Start Server
    server = app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });

  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1);
  }
}

// ✅ Handle unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.error("❌ Unhandled Rejection:", err);
  if (server) {
    server.close(() => process.exit(1));
  } else {
    process.exit(1);
  }
});

// ✅ Handle uncaught exception
process.on("uncaughtException", (err) => {
  console.error("❌ Uncaught Exception:", err);
  process.exit(1);
});

// ✅ Graceful shutdown
process.on("SIGTERM", () => {
  console.log("👋 SIGTERM received. Shutting down...");
  if (server) {
    server.close(() => {
      process.exit(0);
    });
  }
});

startServer();