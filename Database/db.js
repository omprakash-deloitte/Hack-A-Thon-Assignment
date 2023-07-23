
import mongoose from "mongoose";
import { config } from "dotenv";

config();

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

export const dbConnect=async()=>{
    await mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.vgqzmz5.mongodb.net/hackathon?retryWrites=true&w=majority`); 
};