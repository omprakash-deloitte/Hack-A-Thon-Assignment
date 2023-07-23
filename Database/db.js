
import mongoose from "mongoose";

export const dbConnect=async()=>{
    await mongoose.connect("mongodb+srv://omprakashmaurya268:EDJVpU5HkazLFGWf@cluster0.vgqzmz5.mongodb.net/hackathon?retryWrites=true&w=majority"); 
};