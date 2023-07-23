import express from "express";
import jwt from "jsonwebtoken";
import User from "../Model/userModel.js";
import { signinNewUser } from "../Controller/authController.js";
const route = express.Router();

route.post("/singup", async (req, res) => {
  console.log(req.body);
  await User.create(req.body);
  // const secretKey=process.env.SECERET_KEY;
  const secretKey = "om12242dfedf";
  console.log(secretKey);
  const token = jwt.sign({ username: req.body?.username }, secretKey, {
    expiresIn: "1hr",
  });
  res.json({ status: "signup completed" });
});

route.post("/singin", async (req, res) => {
  await signinNewUser(req,res);
  
});

export default route;
