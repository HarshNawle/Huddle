import mongoose from "mongoose";
const messageModel = new mongoose.Schema({
    senderID: {
        //ID will come from userSchema
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiverID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type: String,
        required: true
    },
}, { timestamps: true });
export const Message = mongoose.model("Message", messageModel);
//# sourceMappingURL=messageModel.js.map