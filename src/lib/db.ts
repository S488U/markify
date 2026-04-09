import mongoose, { Connection } from "mongoose";

export async function connectDB(): Promise<void> {
    
    const MONGODB_URI: string | undefined = process.env.MONGODB_URI;
    if (!MONGODB_URI) {
        throw new Error("Please define the MONGODB_URI environment variable");
    }

    if (mongoose.connections[0].readyState) return;

    await mongoose.connect(MONGODB_URI);
    console.log("Mongoose connection succesfull");
}