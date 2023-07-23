import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  name: String,
  age: { type: Number },
  emailId: String,
});

export default mongoose.model("Employee", EmployeeSchema);
