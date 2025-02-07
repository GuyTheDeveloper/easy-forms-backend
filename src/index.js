import express from "express";
import cors from "cors";
import { API_VERSION, FRONTEND_ORIGIN, PORT } from "./config.js";
import cookieParser from "cookie-parser";
import "./models/index.js";
import modules from "./modules/index.js";
import { ZodError } from "zod";
import CustomError from "./errors/CustomError.js";

const app = express();
app.use(
  cors({
    origin: FRONTEND_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

app.use(`/api/${API_VERSION}`, modules);

app.use((err, req, res, next) => {
  if (err instanceof ZodError) {
    const errors = err.errors.map((err) => err.message);
    return res
      .status(400)
      .json({ error: "Invalid credentials", details: errors });
  }

  if (err instanceof CustomError)
    return res.status(err.statusCode).json({ error: err.message });

  return res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
