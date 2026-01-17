import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export async function connectToDb(){
    try{
        console.log("Connecting to database...⏳");
       await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to database successfully! ✅");
    }catch(err){
        console.error("Error connecting to database:", err);
         process.exit(1); // 🚨 STOP SERVER
    }
}
