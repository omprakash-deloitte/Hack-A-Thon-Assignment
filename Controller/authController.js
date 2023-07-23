import { signinNewUserService } from "../Service/authService.js";

export const signinNewUser=async(req,res)=>{
   const data=await signinNewUserService(req);
   return res.status(201).json(data);
}