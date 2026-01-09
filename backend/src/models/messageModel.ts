import mongoose from "mongoose";

const messageModel = new mongoose.Schema({
    senderID:{
        type:String,
    }
})