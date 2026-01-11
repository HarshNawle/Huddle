import  { type RequestHandler } from "express";
import { Conversation } from "../models/conversationModel.js";
import mongoose from "mongoose";
import { Message } from "../models/messageModel.js";


export const sendMessage: RequestHandler = async (req, res) => {
    try {
        const senderID = req.id;
        const receiverID = req.params.id;

        const { message } = req.body;
        let gotConversation = await Conversation.findOne({ 
            // it will compare the senderID and receiverID with the participants array
            // senderID and receiverID --> comes from the route params ( /send/:id )
            participants: { $all: [senderID, receiverID] } 
        });

        if(!gotConversation){
            gotConversation = await Conversation.create({
                participants: [new mongoose.Types.ObjectId(senderID as string), new mongoose.Types.ObjectId(receiverID as string)] as  mongoose.Types.ObjectId[],
            });
        }

        const newMessage = await Message.create({
            senderID: new mongoose.Types.ObjectId(senderID as string),
            receiverID: new mongoose.Types.ObjectId(receiverID as string),
            message: message, // from the request body
        });

        if(newMessage){
            gotConversation.messages.push(newMessage._id);
        }
        await gotConversation.save();

        // SOCKET.IO CODE STARTS HERE -->
        // To send the message to the receiver
        
        return res.status(200).json({ message: "Message sent successfully", newMessage });
    } catch (error: any) {
        console.log("Error in sendMessage", error);
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

export const getMessages: RequestHandler = async (req, res) => {
    try {
        const receiverID = req.params.id;
        const senderID = req.id;
        
        const conversation = await Conversation.findOne({
            participants: { $all: [senderID, receiverID] }
        }).populate("messages");

        if(!conversation){
            return res.status(404).json({ message: "Conversation not found" });
        }

        return res.status(200).json(conversation?.messages);
    } catch (error: any) {
        console.log("Error in getMessages", error);
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
}