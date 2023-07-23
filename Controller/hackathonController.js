import { addHackathonService, enrollInHackathonSrvice, getAllEmployeeService, getAllHackathonService } from "../Service/hackathonService.js";

// GET
export const getAllEmployee=async(req,res)=>{
    const data=await getAllEmployeeService();
    res.status(200).json({
        message:"All employees fetched successfully",
        data
    });
};

export const getAllHackathons=async(req,res)=>{
    const data=await getAllHackathonService();
    res.status(200).json({
        message:"All employees fetched successfully",
        data
    });
};


// POST
export const addHackathon=async(req,res)=>{
    const data=await addHackathonService(req);
    res.status(201).json({
        message:"Hackathon created successfully",
        data
    });
}

export const enrollInHackathon=async(req,res)=>{
    const data=await enrollInHackathonSrvice(req);
    res.status(201).json({
        message:data?"Enrolled successfully":'Employee or Hackathon does not exists'
    });
}

