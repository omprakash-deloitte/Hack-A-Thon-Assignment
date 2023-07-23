import { signinUser } from "../Dao/authDao.js";

export const signinNewUserService=async(req)=>{
    const data=await signinUser(req);
    return data;
}