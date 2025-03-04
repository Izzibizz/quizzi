import dotenv from "dotenv";
import connectDB from "./config/database";
import app from "./app"; 

dotenv.config();

connectDB();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));