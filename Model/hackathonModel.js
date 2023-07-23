import mongoose from "mongoose";

const hackathonSchema = new mongoose.Schema({
  
  techStack:[String],
  totalSeats:Number,
  registationStartDate : Date,
  registationEndDate :Date,
  prizeMoney:{type:String},
  companyName:String,
  description: String,
  status:String,
  organizer:String
});

const Hackathon=mongoose.model("Hackathon", hackathonSchema);
export default Hackathon;