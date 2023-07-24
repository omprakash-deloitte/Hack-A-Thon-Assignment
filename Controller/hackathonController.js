import {
  addHackathonService,
  enrollInHackathonSrvice,
  getAllEmployeeService,
  getAllHackathonService,
  getEmployeeParticipatedHackathonService,
  getHostedHackathonService,
} from "../Service/hackathonService.js";


export const getAllEmployee = async (req, res) => {
  const data = await getAllEmployeeService();
  res.status(200).json({
    message: "All employees fetched successfully",
    data,
  });
};

export const getAllHackathons = async (req, res) => {
  const data = await getAllHackathonService();
  res.status(200).json({
    message: "All employees fetched successfully",
    data,
  });
};

export const addHackathon = async (req, res) => {
  const data = await addHackathonService(req);
  res.status(201).json({
    message: "Hackathon created successfully",
    data,
  });
};

export const enrollInHackathon = async (req, res) => {
  const data = await enrollInHackathonSrvice(req);
  res.status(201).json({
    message: data
      ? "Enrolled successfully"
      : "Employee or Hackathon does not exists",
  });
};

export const getHostedHackathon = async (req, res) => {
  const data = await getHostedHackathonService(req, res);
  res.status(201).json({
    message: data.length > 0 ? "Data found" : "Data Not found",
    data,
  });
};

export const getEmployeeParticipatedHackathon = async (req, res) => {
    const data = await getEmployeeParticipatedHackathonService(req, res);
    res.status(201).json({
      message: data.length > 0 ? "Data found" : "Data Not found",
      data,
    });
  };

