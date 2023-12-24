import express from "express";
import userRoute from "./routes/user.route";
/*mongoose
  .connect('')
  .then(() => console.log("Connected to db"))
  .catch((er) => console.log(er));*/

const app = express();

app.use(express.json());
app.use("/api/v1/user", userRoute);
console.log('Hello')
app.listen(3000, () => {
  console.log(`[server]: Server is running at http://localhost:3000`);
});