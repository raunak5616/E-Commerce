import mongoose from "mongoose";
const URL = `mongodb+srv://raunakkh8789:WhAswUwWXYWcOZPA@cluster0.qglcoy1.mongodb.net/?appName=Cluster0`

export async function connectToDb(){
    try{
        console.log("Connecting to database...⏳");
        await mongoose.connect(URL);
        console.log("Connected to database successfully! ✅");
    }catch(err){
        console.error("Error connecting to database:", err);
    }
}
