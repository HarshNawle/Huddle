import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/DBConnection.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
dotenv.config({});
const app = express();
const PORT = process.env.PORT;
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/users", userRoutes);
app.listen(PORT, () => {
    connectDB();
    console.log("Server started!");
});
//# sourceMappingURL=index.js.map