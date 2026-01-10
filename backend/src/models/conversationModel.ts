import mongoose from "mongoose";

const conversationModel = new mongoose.Schema({
    //Array of User ID
    participants: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }],
    //Array of Message ID
    messages: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Message",
        required: true
    }],
    
}, { timestamps: true });

export const Conversation = mongoose.model("Conversation", conversationModel);