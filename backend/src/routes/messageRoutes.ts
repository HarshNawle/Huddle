import express from 'express';
import { sendMessage, getMessages } from '../controller/messageController.js';
import type { RequestHandler } from 'express';
import isAuthenticated from '../middleware/isAuthenticated.js';
const router = express.Router();

router.post("/send/:id", isAuthenticated, sendMessage as RequestHandler);
router.get("/:id", isAuthenticated, getMessages as RequestHandler);

export default router;