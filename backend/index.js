import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/ConnectDB.js"
import categoryRoutes from "./routes/categoryRoutes.js"
import questionRoutes from "./routes/questionRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import cors from "cors"

dotenv.config()
await connectDB();

const app = express()
app.use(cors({
  origin: "http://localhost:5173",
}))

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/categories", categoryRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})