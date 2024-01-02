import express from "express";
import mongoose from "mongoose";
import env from "dotenv";
import authRoute from "./routes/Auth.route";
import userRoute from "./routes/User.route";
import jobSeekerRoute from "./routes/JobSeeker.route";
import jobCategoryRoute from "./routes/JobCategory";

env.config();
const mongoUrl = process.env.MONGO_URL;

mongoose
  .connect(mongoUrl as string)
  .then(() => console.log("Connected to db"))
  .catch((er) => console.log(er));

const app = express();

app.use(express.json());
app.use("/api/v1/user", userRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/job-seeker", jobSeekerRoute);
app.use("/api/v1/category", jobCategoryRoute);

app.listen(3000, () => {
  console.log(`[server]: Server is running at http://localhost:3000`);
});


app.use((err: any, req: any, res: any, next: () => void) => {
  console.log('error:',err)
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
