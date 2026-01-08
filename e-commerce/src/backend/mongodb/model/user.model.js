import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const userSchema = new mongoose.Schema({
    user:{
        id: uuidv4(),
        Name: { type: String, required: true },
        Email: { type: String, required: true, unique: true },
        Phone: { type: String, required: true, unique: true},
        password: { type: String, required: true}
    }
})