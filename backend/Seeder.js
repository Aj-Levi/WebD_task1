import connectDB from "./config/ConnectDB.js";
import Category from "./models/Category.js";
import Question from "./models/Question.js";
import dotenv from "dotenv"

dotenv.config();

const importData = async () => {
  try {
    await connectDB();

    await Category.deleteMany({});
    await Question.deleteMany({});
    
    const response = await fetch("https://test-data-gules.vercel.app/data.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let data = await response.json();
    data = data.data;

    for(const obj of data){
        if(!obj.title) continue;
        const newCategory = await Category.create({
            title: obj.title,
            questions: [],
        });
        for(const ques of obj.ques){
            if((!ques.title) || (!ques.yt_link)) continue;
            const newQuestion = await Question.create({
                title: ques.title,
                url: ques.yt_link,
            });
            await newQuestion.save()
            newCategory.questions.push(newQuestion._id);
        }
        await newCategory.save();
    }

    console.log("Data loaded successfully");
  } catch (error) {
    console.error("could not load data : ", error);
  }
};

importData();
