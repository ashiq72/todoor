import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import router from "./app/modules/core.route";
import config from "./config";

const app = express();
const allowedOrigins = [
  "http://localhost:3000",
  config.client_url,
  ...(process.env.CORS_ORIGINS?.split(",") || []),
].filter(Boolean) as string[];

// middlewares
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());

// test route
app.get("/", (req, res) => {
  res.send("App is running 🚀");
});

// routes (future)
app.use("/api/v1", router);

export default app;
