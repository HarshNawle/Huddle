import type { RequestHandler } from "express";
import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({});

export const registerUser: RequestHandler = async (req, res) => {
    try {
        const { fullName, email, password, confirmPassword, gender } = req.body;
        if (!fullName || !email || !password || !gender || !confirmPassword) {
            return res.status(400).json({ message: "All fields are required" });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // 10 --> salt value
        const hashedPassword = await bcrypt.hash(password, 10);

        const femaleProfile = "https://api.dicebear.com/9.x/adventurer/svg?seed=Avery"
        const maleProfile = "https://api.dicebear.com/9.x/adventurer/svg?seed=Alexander"
        const profile = gender === "female" ? femaleProfile : maleProfile;

        const user = await User.create({ fullName, email, password: hashedPassword, gender, profile });
        return res.status(201).json({ message: "User registered successfully",success:true  , user });
    } catch (error: any) {
        console.log("Error in registerUser", error);
        return res.status(500).json({ message: "Internal server error", error: error.message,success:false });
    }
}

export const loginUser: RequestHandler = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required",success:false });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found", success: false });
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid password", success: false });
        }

        const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET as string, { expiresIn: "1d" });
        // Store jwt token in cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 1000 * 60 * 60 * 24,
            sameSite: "strict"
        });

        return res.status(200).json({ message: "Login successful", user, success: true, token });
    } catch (error: any) {
        console.log("Error in loginUser", error);
        return res.status(500).json({ message: "Internal server error", error: error.message,success:false });
    }
}

export const logoutUser: RequestHandler = async (req, res) => {
    try {
        res.clearCookie("token");
        return res.status(200).json({ message: "Logout successful", success: true });
    } catch (error: any) {
        console.log("Error in logoutUser", error);
        return res.status(500).json({ message: "Internal server error", error: error.message,success:false });
    }
}

export const getOtherUsers: RequestHandler = async (req, res) => {
    try {
        const loggedInUserID = req.id;
        const otherUsers = await User.find({ _id: { $ne: loggedInUserID } }).select("-password");
        return res.status(200).json(otherUsers);
    } catch (error: any) {
        console.log("Error in getOtherUser", error);
        return res.status(500).json({ message: "Internal server error", error: error.message,success:false });
    }
}