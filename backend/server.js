import express from "express";
import cors from "cors";
import { connectDB } from "./config/connectDb.js";
import userRouter from "./routes/userRouter.js";

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

connectDB()

app.use("/user/", userRouter);
app.use('/admin/',adminRouter)


app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});
