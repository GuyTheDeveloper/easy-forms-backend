import { Router } from "express";
import controller from "./controller.js";
import { authMiddleware } from "../../middlewares/authMiddleware.js";

const router = Router();

router.get("/users", authMiddleware, controller.GETALLUSERS);
router.post("/register", controller.REGISTER);
router.post("/login", controller.LOGIN);

export default router;
