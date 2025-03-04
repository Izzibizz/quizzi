import express from "express";
import { Question } from "../models/Questions";

const router = express.Router();

// GET all questions
router.get("/", async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// GET questions by category
router.get("/category/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const questions = await Question.find({ category });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// GET questions by difficulty
router.get("/difficulty/:difficulty", async (req, res) => {
  try {
    const { difficulty } = req.params;
    const questions = await Question.find({ difficulty });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;