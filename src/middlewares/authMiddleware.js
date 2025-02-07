import { JWT } from "../lib/jwt.js";

export const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res.status(401).json({ message: "Authentication is required" });

  try {
    const result = JWT.verify(token);

    if (result.error) {
      if (result.error === "TokenExpiredError")
        return res.status(403).json({ message: result.message });
      if (result.error === "JsonWebTokenError")
        return res.status(403).json({ message: result.message });

      return res.status(500).json({ message: result.message });
    }

    req.email = result.email;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
