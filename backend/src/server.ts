import dotenv from "dotenv";
import connectDB from "./config/database";
import app from "./app"; // ✅ Import the app

dotenv.config(); // Load environment variables

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));