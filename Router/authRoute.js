import express from "express";
import jwt from "jsonwebtoken";
import User from "../Model/userModel.js";
import { loginUser, registerNewUser } from "../Controller/authController.js";
const route = express.Router();

route.post("/register", async (req, res) => {
 await registerNewUser(req,res);
});

route.post("/login", async (req, res) => {
  await loginUser(req,res);
  
});

export default route;
