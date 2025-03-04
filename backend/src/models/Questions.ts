import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  category: { type: String, required: true },
  question: { type: String, required: true },
  answer: { type: String, required: true },
  option_1: { type: String, required: true },
  option_2: { type: String, required: true },
  difficulty: { type: String, required: true },
  clue_1: { type: String },
  clue_2: { type: String },
  responded_to: { type: Boolean, default: false },
  point: { type: Boolean, default: false },
});

export const Question = mongoose.model("Question", QuestionSchema);
