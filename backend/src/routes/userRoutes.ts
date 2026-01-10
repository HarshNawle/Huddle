import express from "express";
import { loginUser, logoutUser, registerUser } from "../controller/userController.js";
import type { RequestHandler } from "express";

const router = express.Router();

router.post("/register", registerUser as RequestHandler);
router.post("/login", loginUser as RequestHandler);
router.post("/logout", logoutUser as RequestHandler);

export default router;