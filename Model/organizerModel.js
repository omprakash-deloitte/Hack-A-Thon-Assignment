import mongoose from "mongoose";

const organizerSchema = new mongoose.Schema({
  name: String,
  email: { type: String },
  phoneNumber: String,
  createdHackathons: [String],
  companyName: String,
});

const Organizer = mongoose.model("Organizer", organizerSchema);
export default Organizer;
