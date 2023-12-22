import express from "express";
import mongoose from "mongoose";
import {userRoute} from "./routes/user.route.js";
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to db"))
  .catch((er) => console.log(er));

const app = express();

app.use(express.json());
app.use("/api/v1/user", userRoute);
