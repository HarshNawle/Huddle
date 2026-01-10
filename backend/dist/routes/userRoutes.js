import express from "express";
import { getOtherUsers, loginUser, logoutUser, registerUser } from "../controller/userController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
const router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.delete("/logout", logoutUser);
router.get("/", isAuthenticated, getOtherUsers);
export default router;
//# sourceMappingURL=userRoutes.js.map