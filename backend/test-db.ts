import mongoose from "mongoose";

// const url = "mongodb://db_user:db_user@cluster1.4ptehyh.mongodb.net/?appName=Cluster1";
const url = "mongodb+srv://db_user:dev101101@cluster0.psnl9yl.mongodb.net/base360";

mongoose
  .connect(url)
  .then(() => {
    console.log("✅ Connected!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ Failed:", err.message);
    process.exit(1);
  });