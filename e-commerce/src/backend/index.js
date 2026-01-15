import express from "express";
import cors from "cors";
import { connectToDb } from "./connection.js";
import User from "./mongodb/model/user.model.js";
import bcrypt from "bcryptjs";

const hashPassword = await bcrypt.hash("myPassword123", 10);

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is working");
});

app.post("/signup", async (req, res) => {
 try {
  const { name, email, phone, password } = req.body;
  if(!name || !email || !phone || !password){
    return res.status(400).json({message: "All fields are required"});
  }
  const user = await User.create({
    name,
    email,
    phone,
    password: hashPassword
  });
  res.status(201).json({message: "User registered successfully",user});
 } catch (error) {
  res.status(500).json({message: "Internal Server Error"});
 }
});

async function startServer(){
 try{
   await connectToDb();
  app.listen(5000, "127.0.0.1", () => {
  console.log("Server running on http://127.0.0.1:5000");
});
 }catch(err){
    console.error("Failed to start server:", err);
 }
}
 startServer();