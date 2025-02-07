import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT ?? 5000;
const JWT_SECRET = process.env.JWT_SECRET ?? "";
const API_VERSION = process.env.API_VERSION ?? "v1";
const passwordKeyLen = 48;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN;
const PG_USER = process.env.PG_USER;
const PG_HOST = process.env.PG_HOST;
const PG_DATABASE = process.env.PG_DATABASE;
const PG_PASSWORD = process.env.PG_PASSWORD;

export {
  PORT,
  JWT_SECRET,
  API_VERSION,
  passwordKeyLen,
  FRONTEND_ORIGIN,
  PG_USER,
  PG_HOST,
  PG_DATABASE,
  PG_PASSWORD,
};
