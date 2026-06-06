import mongoose from "mongoose";
import config from ".";

let isConnected = false;

const connectDB = async () => {
  if (isConnected || mongoose.connection.readyState === 1) {
    return;
  }

  if (!config.database_url) {
    throw new Error("DATABASE_URL is not defined");
  }

  try {
    await mongoose.connect(config.database_url);
    isConnected = true;
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed", error);
    throw error;
  }
};

export default connectDB;
