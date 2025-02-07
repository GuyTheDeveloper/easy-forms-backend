import { JWT_SECRET } from "../config.js";
import jwt from "jsonwebtoken";

export const JWT = {
  sign: (data, maxAge = "3d") => {
    try {
      return jwt.sign(data, JWT_SECRET, {
        expiresIn: maxAge,
      });
    } catch (err) {
      return { error: "Token signing failed", details: err.message };
    }
  },
  verify: (token) => {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (err) {
      if (err.name === "TokenExpiredError") {
        return { error: "TokenExpiredError", message: "Token has expired" };
      }
      if (err.name === "JsonWebTokenError") {
        return { error: "JsonWebTokenError", message: "Invalid token" };
      }
      return {
        error: "TokenVerificationError",
        message: "Token verification failed",
      };
    }
  },
};
