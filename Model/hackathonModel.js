import mongoose from "mongoose";

const hackathonSchema = new mongoose.Schema({
  techStack:[String],
  totalSeats:Number,
  registationStartDate : String,
  registationEndDate :String,
  startDate:String,
  startTime:String,
  prizeMoney:{type:String},
  companyName:String,
  description: String,
  status:String,
  createdBy:String,
  organizerId:String,
  enrolledUsers:[String],
  
});

const Hackathon=mongoose.model("Hackathon", hackathonSchema);
export default Hackathon;