import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/ConnectDB.js"
import categoryRoutes from "./routes/categoryRoutes.js"
import questionRoutes from "./routes/questionRoutes.js"

dotenv.config()
await connectDB();

const app = express()
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.use("/api/categories", categoryRoutes);
app.use("/api/questions", questionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})