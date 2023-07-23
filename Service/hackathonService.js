import { addHackthonDao, enrollEmployeeInHackathonDao, getAllEmployeeDao, getAllHackathonDao } from "../Dao/hackathonDao.js";


export const getAllEmployeeService=async()=>{
    const data= await getAllEmployeeDao();
    return data;
};

export const getAllHackathonService=async()=>{
    const data= await getAllHackathonDao();
    return data;
};


export const addHackathonService=async(req)=>{
    const data=await addHackthonDao(req);
    return data;
}

export const enrollInHackathonSrvice=async(req)=>{
    const data=await enrollEmployeeInHackathonDao(req);
    return data;
}