import express from "express";
import userRoute from "./routes/user.route";
import mongoose from "mongoose";
import env from "dotenv";

env.config();
const mongoUrl = process.env.MONGO;
if (mongoUrl) {
  mongoose
    .connect(mongoUrl)
    .then(() => console.log("Connected to db"))
    .catch((er) => console.log(er));
} else {
  console.error("MongoDB connection URL is undefined. Please check your environment variables.");
  process.exit(1); // Exit the process with an error code
}

const app = express();

app.use(express.json());
app.use("/api/v1/user", userRoute);
console.log('Hello')
app.listen(3000, () => {
  console.log(`[server]: Server is running at http://localhost:3000`);
});