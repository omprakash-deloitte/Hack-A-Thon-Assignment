import { loginUserService, registerNewOrganizerService, registerNewUserService } from "../Service/authService.js";

export const registerNewUser=async(req,res)=>{
   const data=await registerNewUserService(req);
   res.status(201).json(data);
};

export const loginUser=async(req,res)=>{
   const data=await loginUserService(req);
   res.status(200).json(data);
};

export const registerNewOrganizer=async(req,res)=>{
   const data= await registerNewOrganizerService(req);
   res.status(201).json(data);
};


