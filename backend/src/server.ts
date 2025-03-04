import express from "express";
import connectDB from "./config/database";
import documentationRoutes from "./routes/docs";
import questionRoutes from "./routes/questions";

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());

app.use("/", documentationRoutes);
app.use("/questions", questionRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));