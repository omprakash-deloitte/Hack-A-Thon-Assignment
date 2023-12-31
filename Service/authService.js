import { signinUser, signupOrganizer, signupUser } from "../Dao/authDao.js";


export const registerNewUserService=async(req)=>{
    const data=await signupUser(req);
    return data;
}

export const loginUserService=async(req)=>{
    const data=await signinUser(req);
    return data;
};

export const registerNewOrganizerService=async(req)=>{
    const data=await signupOrganizer(req);
    return data;
}