import express from "express";
import employeeRoute from "./Router/allRouter.js";
import { dbConnect } from "./Database/db.js";
import Employee from "./Model/employeeModel.js";
import User from "./Model/userModel.js";
import Hackathon from "./Model/hackathonModel.js";
import Organizer from "./Model/organizerModel.js";
import authRoute from "./Router/authRoute.js";
import { verifyAuth } from "./Middleware/authMiddleware.js";


// Connection with database (MongoDB Atlas)
dbConnect();

const app = express();
const PORT = 5000;

app.use(express.json());

// app.use("/hackathon", verifyAuth, employeeRoute);
app.use("/hackathon", employeeRoute);
app.use("/auth", authRoute);

app.listen(PORT, () => {
  console.log("Server is running...", PORT);
});
