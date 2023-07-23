import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: String,
  age: { type: Number },
  emailId: String,
  participatedHackatons:[String],
  companyName:String
});

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
