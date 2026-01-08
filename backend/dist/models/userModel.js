import mongoose, { Mongoose } from "mongoose";
import { profile } from "node:console";
export class UserModel {
}
const userModel = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    userName: {
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
        default: ""
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: true
    }
});
export const User = mongoose.model("User", userModel);
//# sourceMappingURL=userModel.js.map