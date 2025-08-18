import express from "express";
import Question from "../models/Question.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { search , page , limit } = req.query;

    let questions = await Question.find();
    if (search) {
      questions = questions.filter((question) =>
        question.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    const startIndex = (page - 1) * limit;
    const endIndex = Number(startIndex) + Number(limit);
    questions = questions.slice(startIndex, endIndex);
    res.json(questions);
  } catch (error) {
    console.error("Error fetching questions:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
