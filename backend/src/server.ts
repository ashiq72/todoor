import dotenv from "dotenv";
import app from "./app";
import config from "./config";
import connectDB from "./config/db";

dotenv.config();

const port = config.port || 5000;

const bootstrap = async () => {
  await connectDB();

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

bootstrap().catch((error) => {
  console.error("Failed to start server", error);
  process.exit(1);
});
