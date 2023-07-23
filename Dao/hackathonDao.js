import Employee from "../Model/employeeModel.js";
import Hackathon from "../Model/hackathonModel.js";

export const getAllEmployeeDao = async () => {
  return await Employee.find({});
};

export const getAllHackathonDao = async () => {
  return await Hackathon.find({});
};

export const addHackthonDao = async (req) => {
  const newHackathon = await Hackathon.create(req.body);
  return newHackathon;
};

export const enrollEmployeeInHackathonDao = async (req) => {
  const { employeeId, hackathonId } = req.body;
  const user = await Employee.find({ _id: employeeId });
  if (user) {
    const hackathon = await Hackathon.find({ _id: hackathonId });
    if (hackathon) {
      const tempEmployee = await Employee.updateOne(
        { _id: employeeId },
        { $push: { participatedHackatons: hackathonId } },
        { new: true }
      );
      const tempHackathon = await Hackathon.updateOne(
        { _id: hackathonId },
        { $push: { enrolledUsers: employeeId } },
        { new: true }
      );

      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
