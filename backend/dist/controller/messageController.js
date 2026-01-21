import {} from "express";
import { Conversation } from "../models/conversationModel.js";
import mongoose from "mongoose";
import { Message } from "../models/messageModel.js";
export const sendMessage = async (req, res) => {
    try {
        const senderID = req.id;
        const receiverID = req.params.id;
        const { message } = req.body;
        let gotConversation = await Conversation.findOne({
            // it will compare the senderID and receiverID with the participants array
            // senderID and receiverID --> comes from the route params ( /send/:id )
            participants: { $all: [senderID, receiverID] }
        });
        if (!gotConversation) {
            gotConversation = await Conversation.create({
                participants: [new mongoose.Types.ObjectId(senderID), new mongoose.Types.ObjectId(receiverID)],
            });
        }
        const newMessage = await Message.create({
            senderID: new mongoose.Types.ObjectId(senderID),
            receiverID: new mongoose.Types.ObjectId(receiverID),
            message: message, // from the request body
        });
        if (newMessage) {
            gotConversation.messages.push(newMessage._id);
        }
        await gotConversation.save();
        // SOCKET.IO CODE STARTS HERE -->
        // To send the message to the receiver
        return res.status(200).json({ message: "Message sent successfully", newMessage });
    }
    catch (error) {
        console.log("Error in sendMessage", error);
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};
export const getMessages = async (req, res) => {
    try {
        const receiverID = req.params.id;
        const senderID = req.id;
        const conversation = await Conversation.findOne({
            participants: { $all: [senderID, receiverID] }
        }).populate("messages");
        if (!conversation) {
            // Return empty array for new conversations (no messages yet)
            return res.status(200).json([]);
        }
        return res.status(200).json(conversation.messages);
    }
    catch (error) {
        console.log("Error in getMessages", error);
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};
//# sourceMappingURL=messageController.js.map