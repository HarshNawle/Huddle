import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import type { CustomJwtPayload } from "../types/express.js";

const isAuthenticated: RequestHandler = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if(!token) {
            return res.status(401).json({ message: "User isUnauthorized", success: false });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        console.log(decoded);
        
        if(!decoded || typeof decoded === 'string') {
            return res.status(401).json({ message: "Invalid token", success: false });
        }
        req.id = (decoded as CustomJwtPayload).userID;
        next();
    } catch (error: any) {
        console.log("Error in isAuthenticated", error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
}

export default isAuthenticated;