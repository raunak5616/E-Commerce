import express from "express";
import { connectToDb } from "./mongodb/connection/connection.js";
import auth from "./router/index.js";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(cors({
  origin: "http://localhost:3000", 
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.get("/",(req,res)=>{
  res.send("E-Commerce Backend is running...");
})

app.use("/api/auth",auth);

async function startServer(){
 try{
  await connectToDb();
  console.log("Connected DB name:", mongoose.connection.name);
  app.listen(5000, "127.0.0.1", () => {
  console.log("Server running on http://127.0.0.1:5000");
});
 }catch(err){
    console.error("Failed to start server:", err);
 }
}
 startServer();