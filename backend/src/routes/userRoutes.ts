import express from "express";
import { getOtherUsers, loginUser, logoutUser, registerUser } from "../controller/userController.js";
import type { RequestHandler } from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.post("/register", registerUser as RequestHandler);
router.post("/login", loginUser as RequestHandler);
router.delete("/logout", logoutUser as RequestHandler);
router.get("/", isAuthenticated, getOtherUsers as RequestHandler);

export default router;