import express from "express";
import cors from "cors";
import questionsRoutes from "./routes/questions";
import docsRoutes from "./routes/docs";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/questions", questionsRoutes);
app.use("/", docsRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the API! Documentation:");
});

export default app;