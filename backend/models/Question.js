import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  tutorial: {
    type: String,
    required: true,
    trim: true,
  },
  prob1: {
    type: String,
    trim: true,
  },
  prob2: {
    type: String,
    trim: true,
  },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    default: "medium",
  },
},{
    timestamps: true,
});

questionSchema.index({title: 1});

const Question = mongoose.model("Question", questionSchema);

export default Question;
