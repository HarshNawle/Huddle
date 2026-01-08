import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config({});

const connectDB = async () => {
    const dbUrl = process.env.DB_CONNECTION;

    if (!dbUrl) {
        console.error("Database connection error!");
        return;
    }

    await mongoose.connect(dbUrl)
        .then(() => {
            console.log("Database Connected")
        })
        .catch((error) => {
            console.log(error)
        })
}

export default connectDB;