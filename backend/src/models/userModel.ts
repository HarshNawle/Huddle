import mongoose, { Mongoose } from "mongoose";
import { profile } from "node:console";

export class UserModel {

}

const userModel = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        type: String,
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "male", "female"],
        required: true
    }

}, { timestamps: true });

export const User = mongoose.model("User", userModel);