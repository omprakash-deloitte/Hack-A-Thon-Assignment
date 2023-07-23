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

const convertDateFormat = (inputDate) => {
  const dateObj = new Date(inputDate);
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const compareDates = (dateStr1, dateStr2) => {
  const date1 = new Date(dateStr1);
  const date2 = new Date(dateStr2);

  if (date1 > date2) {
    return true;
  } else {
    return false;
  }
};

export const enrollEmployeeInHackathonDao = async (req) => {
  const { employeeId, hackathonId } = req.body;
  const user = await Employee.findOne({ _id: employeeId });
  const hackathon = await Hackathon.findOne({ _id: hackathonId });
  console.log(user, hackathon);
  if (user && hackathon) {
    const date = new Date().toDateString();
    const convertedDate = convertDateFormat(date);
    const dateComp = compareDates(hackathon.registationEndDate, date);
    console.log(convertedDate);
    if (hackathon.totalSeats != 0 && dateComp) {
      const tempEmployee = await Employee.updateOne(
        { _id: employeeId },
        { $push: { participatedHackatons: hackathonId } },
        { new: true }
      );
      const tempHackathon = await Hackathon.updateOne(
        { _id: hackathonId },
        {
          $push: { enrolledUsers: employeeId },
          $set: { slot: hackathon.slot - 1 },
        },
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
