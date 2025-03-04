import mongoose from "mongoose";
import dotenv from "dotenv";
import { Question } from "../models/Questions";
import questionsData from "../data/questions.json";

dotenv.config();

// ✅ Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  throw new Error("❌ MONGO_URI is missing in .env file");
}

mongoose
  .connect(MONGO_URI)
  .then(async () => {
    console.log("✅ MongoDB Connected - Seeding Data...");

    // 🛑 Delete all existing questions (Optional)
    await Question.deleteMany();
    console.log("🗑 Existing questions removed");

    // 🌱 Insert new data
    await Question.insertMany(questionsData);
    console.log("✅ Seeding complete!");

    mongoose.connection.close();
    console.log("🔌 MongoDB connection closed.");
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error);
  });