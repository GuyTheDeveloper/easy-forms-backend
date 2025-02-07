import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT ?? 5000;
const JWT_SECRET = process.env.JWT_SECRET ?? "";
const API_VERSION = process.env.API_VERSION ?? "v1";
const passwordKeyLen = 48;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN ?? "http://localhost:3000";

export { PORT, JWT_SECRET, API_VERSION, passwordKeyLen, FRONTEND_ORIGIN };
