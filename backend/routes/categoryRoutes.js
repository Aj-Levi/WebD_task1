import express from "express";
import Category from "../models/Category.js";
import Question from "../models/Question.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { page, limit } = req.query;

    let categories = await Category.find().populate("questions").exec();
    const startIndex = (page - 1) * limit;
    const endIndex = Number(startIndex) + Number(limit);

    categories = categories.slice(startIndex, endIndex);
    res.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
