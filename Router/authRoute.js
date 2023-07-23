import express from "express";
import { loginUser, registerNewOrganizer, registerNewUser } from "../Controller/authController.js";
const route = express.Router();

route.post("/employee/register", async (req, res) => {
 await registerNewUser(req,res);
});

route.post("/login", async (req, res) => {
  await loginUser(req,res);
});

route.post("/organizer/register",async(req,res)=>{
  await registerNewOrganizer(req,res);
});
export default route;
