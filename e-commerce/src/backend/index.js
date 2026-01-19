import express from "express";
import { connectToDb } from "./mongodb/connection/connection.js";
import auth from "./router/index.js";
import cors from "cors";
import mongoose from "mongoose";
import Razorpay from "razorpay";
import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();

import razorpay from "./utils/razorpay.js";
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
app.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    const order = await razorpay.orders.create({
      amount: amount * 100, 
      currency: "INR",
      receipt: "order_" + Date.now(),
    });

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// VERIFY PAYMENT
app.post("/verify-payment", (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body)
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    res.json({ success: true, message: "Payment verified" });
  } else {
    res.status(400).json({ success: false, message: "Invalid signature" });
  }
});


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