import express from "express";
import mongoose from "mongoose";
import env from "dotenv";
import authRoute from "./routes/Auth.route";
import userRoute from "./routes/User.route";
import jobSeekerRoute from "./routes/JobSeeker.route";
import jobCategoryRoute from "./routes/JobCategory";
import errorHandler from "./middlewares/ErrorHandler";
import companyPackageRoute from "./routes/CompanyPackage.route";
import vacancyRoute from "./routes/Vacancy.route";
import companyRoute from "./routes/Company.route";
import requestRoute from "./routes/Request.route";

env.config();

mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => console.log("Connected to db"))
  .catch((er) => console.log(er));

const app = express();

app.use(express.json());
app.use("/api/v1/user", userRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/job-seeker", jobSeekerRoute);
app.use("/api/v1/category", jobCategoryRoute);
app.use("/api/v1/company-package", companyPackageRoute);
app.use("/api/v1/vacancy", vacancyRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/request", requestRoute);
app.use(errorHandler);
app.listen(process.env.PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${process.env.PORT}`);
});

