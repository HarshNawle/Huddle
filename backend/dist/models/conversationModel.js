import mongoose from "mongoose";
const conversationModel = new mongoose.Schema({
    //Array of User ID
    participants: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }],
    //Array of Message ID
    messages: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
        }],
}, { timestamps: true });
export const Conversation = mongoose.model("Conversation", conversationModel);
//# sourceMappingURL=conversationModel.js.map