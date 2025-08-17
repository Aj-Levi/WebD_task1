import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  url: {
    type: String,
    required: true,
    trim: true,
  },
},{
    timestamps: true,
});

const Question = mongoose.model("Question", questionSchema);

export default Question;
