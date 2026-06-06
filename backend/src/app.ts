import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import router from "./app/modules/core.route"

const app = express();

// middlewares
app.use(
  cors({
    origin: "http://localhost:3000", // your frontend
    credentials: true, // IMPORTANT if using cookies/auth
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