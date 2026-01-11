import jwt from "jsonwebtoken";
const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "User isUnauthorized", success: false });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded || typeof decoded === 'string') {
            return res.status(401).json({ message: "Invalid token", success: false });
        }
        req.id = decoded.userID;
        next();
    }
    catch (error) {
        console.log("Error in isAuthenticated", error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};
export default isAuthenticated;
//# sourceMappingURL=isAuthenticated.js.map