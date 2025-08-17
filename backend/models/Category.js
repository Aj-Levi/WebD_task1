import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
    }]
},{
    timestamps: true,
})

const Category = mongoose.model("Category", categorySchema, "categories");

export default Category;
