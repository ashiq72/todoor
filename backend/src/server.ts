import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";
import config from "./config";

dotenv.config();

const DATABASE_URL = config.database_url as string;

let isConnected = false;

// ✅ Connect DB (serverless safe)
const connectDB = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(DATABASE_URL);
    isConnected = true;
    console.log("✅ Database connected");
  } catch (error) {
    console.error("❌ DB connection error:", error);
    throw error;
  }
};

// ✅ Vercel handler
export default async function handler(req: any, res: any) {
  await connectDB();
  return app(req, res);
}